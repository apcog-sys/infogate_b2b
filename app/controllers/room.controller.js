const db = require("../models");
const Sequelize = require("sequelize");
const { request } = require("express");
const req = require("express/lib/request");
const Op = Sequelize.Op;
const { ValidationError } = require("sequelize");
var randomToken = require("random-token");
const { key_register, user_register } = require("../models");
const room = db.rooms;
const inbox = db.inbox;
const temp = db.temp_user_register;
const user = db.user_register;
var moment = require("moment");
const encrypt_decrypt = require("../controllers/encrypt_decrypt.controller");

const add = async (req, res) => {
  try {
    // to get the role & app_key of current_user
    await userDetails(req);

    if (req.body.role == "super_admin") {
      const result = await room.create(req.body);
      if (result.dataValues.id) {
        res.send({
          Ack: "Add data successfull " + "with id: " + result.dataValues.id,
        });
      } else {
        res.send({ Ack: "Data not added! " });
      }
    } else {
      res.send({ Ack: "Not authorized to create an entity" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const update = async (req, res) => {
  try {
    await userDetails(req);
    if (req.body.role == "super_admin") {
      console.log("req::", req.body);
      let condition = req.body.where;
      const result = await room.update(req.body.what, { where: condition });

      if (result > 0) {
        res.send({ Ack: "Data update successfull" });
      } else {
        res.send({ Ack: "Data not updated " });
      }
    } else {
      res.send({ Ack: "Not authorized to create an entity" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const get = async (req, res) => {
  try {
    await userDetails(req);
    if (req.body.role == "super_admin") {
      // to get the current user
      if ((req.body.what = "") && (req.body.where = "")) {
        result = await room.findAll();
      }
      if (req.body.what != "") {
        result = await room.findAll({
          where: req.body.where,
          attributes: req.body.what,
        });
      } else {
        result = await room.findAll({ where: req.body.where });
      }
      res.status(200).send(result);
    } else {
      res.send({ Ack: "Not authorized to create an entity" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const putMessage = async (req, res) => {
  try {
    await userDetails(req);
    if (req.body.role == "super_admin") {
      // for the given key get the room details
      const key_result = await key_register.findOne({
        where: { key: req.body.key },
      });
      const room_id = key_result.dataValues.room_id;

      const room_result = await room.findOne({ where: { id: room_id } });

      var subscribers = room_result.dataValues.sub_user_ids; // subscribers for the room
      var msg_types = Object.keys(room_result.dataValues.message_types); // valid msg_types for the room
      var req_msg = req.body.msg_type; // req_msg_type

      let valid_msg; // flag to check if msg is valid
      for (i = 0; i < msg_types.length; i++) {
        if (req_msg.toString() == msg_types[i].toString()) {
          valid_msg = "true";
        }
      }

      if (valid_msg == "false") {
        res.send({ Ack: "Invalid msg_type for the room!" });
      }

      // get the app_inbox_urls for the room
      var user_urls = [];
      var sub_urls = [];
      for (i = 0; i < subscribers.length; i++) {
        user_urls[i] = await user_register.findOne({
          where: { id: subscribers[i] },
          attributes: ["id"],
        });

        //console.log("contact_details::", user_urls[i].dataValues.user_id)

        sub_urls[i] = user_urls[i].dataValues.id;
      }

      //console.log("sub_urls::", sub_urls)

      // if msg already exists, get id else: create msg in msg_q table:
      const msg_exist = await db.msg_q.findOne({
        where: { msg_body: req.body.msg },
      });
      let msg_id;

      //console.log("msg_exist::", msg_exist)
      if (msg_exist == null) {
        // encrypt the msg and store in db
        const encryptedMsg = await encrypt_decrypt.encryptMsg(
          req.body.msg,
          req.body.key
        );
        const msg_q_result = await db.msg_q.create({ msg_body: encryptedMsg });
        msg_id = JSON.stringify(msg_q_result.id);
      } // if msg_id generated for the msg
      else {
        msg_id = msg_exist.dataValues.id;
      }

      //create an entry in inbox with sub_urls, status=pending, and retries=max_retries
      for (i = 0; i < sub_urls.length; i++) {
        let info = {
          target_userid: sub_urls[i],
          room_id: room_id,
          in_stamp: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
          out_stamp: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
          when_to_deliver: "2022-08-30 05:47:38",
          delivery_stamp: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
          msg_id: msg_id,
          retries: 5,
          status: "pending",
        };

        //console.log("info::", info)

        const inbox_entry = await inbox.create(info);

        console.log("ibox_entry::", inbox_entry);
        res.send({ Ack: "sucessfully added the urls to inbox!" });
      }
    } else {
      res.send({ Ack: "Not authorized to create an entity" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const joinRoom = async (req, res) => {
  try {
    console.log("req::", req.body);
    await userDetails(req);
    if (req.body.role == "super_admin") {
      // console.log("req:", req.body)
      // find the room in rooms table and get the room_type
      var room_result = await room.findOne({
        where: { room_name: req.body.room },
      });

      console.log("room_result::", room_result);
      //check if room_type is public or private
      if (room_result.room_type == "public") {
        var sub_ids = room_result[0].dataValues.sub_user_ids;
        var pub_ids = room_result[0].dataValues.pub_user_ids;
        var mode = req.body.mode;
        var roomname = req.body.room;
        console.log(sub_ids, pub_ids, mode);

        allot_pub_sub_role(
          req.body.user_id,
          sub_ids,
          pub_ids,
          mode,
          roomname,
          res
        );

        allot_pub_sub_role(
          req.body.user_id,
          sub_ids,
          pub_ids,
          mode,
          roomname,
          res
        );
      } else if (room_result.room_type == "private") {
        // public room, by default he is the subscriber
        //put the request in temp_user_register
        //then -> once approved -> send email to the user
        //if the room is private then check if is a publisher,

        const user_result = await user.findAll({
          where: { id: req.body.user_id },
        });
        //to find the admin of the entity of user
        const user_result1 = await user.findAll({
          where: {
            entity_name: user_result[0].entity_name,
            role_name: "admin",
          },
        });
        let info = {
          user_id: req.body.user_id,
          request_type: "join room",
          requested_changes: { room_name: req.body.room },
          status: "for_approval",
          approver_id: user_result1[0].id,
        };

        console.log("info", info);
        // add request to temp_user_register table
        const temp_result = await temp.create(info);

        console.log("temp result:", temp_result);

        // add user to the room as subscriber
        const room_result = await room.findAll({
          where: { room_name: req.body.room },
        });

        /*
          get data from temp table for that user, check if the status is approved.
          if the status is approved then call the allot_pub_sub_role function
        */

        const temp_res = await temp.findAll({ where: { status: "approved" } });

        console.log("temp_result", temp_res);

        var sub_ids = room_result[0].dataValues.sub_user_ids;
        var pub_ids = room_result[0].dataValues.pub_user_ids;
        var mode = req.body.mode;
        var roomname = req.body.room;
        console.log(sub_ids, pub_ids, mode);

        allot_pub_sub_role(
          req.body.user_id,
          sub_ids,
          pub_ids,
          mode,
          roomname,
          res
        );
        /*if(sub_ids.includes(req.body.user_id))
        {
          res.send({"Ack":"You are already a subcriber to the room" });
        }
        else
        {
          // 1. pub n sub - role 0
          // 2. pub - role 1
          // 3. sub - role 2
          // if mode is 0 - add to both pub_list and sub_list
          //if 1 - pub, ig 2- sub
          sub_ids.push(req.body.user_id)
          const room_update_result = await room.update({"sub_user_ids" : sub_ids}, { where: {"room_name" : req.body.room}})      
          if(room_update_result>0){ res.send({"Ack":"You have joined the room!"});}
          else{res.send({"Ack":"Data not updated " });}
          // send an email to the user
        }   */
      }
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const encrypt = async (req, res) => {
  let msg = req.body.msg;
  let key = req.body.key;
  const encryptedMsg = await encrypt_decrypt.encryptMsg(msg, key);
  res.send("Encrypted message: " + encryptedMsg);
};

const decrypt = async (req, res) => {
  let key = req.body.key;
  let encryptedMsg = req.body.encryptedMsg;

  const decryptedMsg = await encrypt_decrypt.decrypMsg(encryptedMsg, key);
  res.send("Decrypted message: " + decryptedMsg);
};

async function allot_pub_sub_role(
  user_id,
  sub_ids,
  pub_ids,
  mode,
  roomname,
  res
) {
  console.log("in allot");
  if (sub_ids.includes(user_id)) {
    res.send({ Ack: "You are already a subcriber to the room" });
  } else if (pub_ids.includes(user_id)) {
    res.send({ Ack: "You are already a publisher to the room" });
  } else {
    switch ((room_mode = mode)) {
      case 0:
        if (mode == 0) {
          sub_ids.push(user_id);
        }
      case 1:
        if (mode == 1) {
          pub_ids.push(user_id);
        }
      case 2:
        if (mode == 2) {
          sub_ids.push(user_id);
          pub_ids.push(user_id);
        }
    }
    const room_update_result = await room.update(
      { sub_user_ids: sub_ids },
      { where: { room_name: roomname } }
    );
    if (room_update_result > 0) {
      res.send({ Ack: "You have joined the room!" });
    } else {
      res.send({ Ack: "Data not updated " });
    }
  }
}

const userDetails = async (req) => {
  if (req.body) {
    req.body.role = req.currentRole;
    req.body.user_id = req.currentUser;
  }
};

const upgradeRole = async (req, res) => {
  try {
    await userDetails(req);
    if (req.body.role == "super_admin") {
      console.log("req::", req.body);

      const room_result = await room.findAll({ room_name: req.body.room_name });

      console.log("room_result", room_result);

      var sub_ids = room_result[0].dataValues.sub_user_ids;
      var pub_ids = room_result[0].dataValues.pub_user_ids;
      var mode = req.body.mode;
      console.log("sub_ids", sub_ids);
      console.log("pub_ids", pub_ids);
      console.log("mode ", mode);
      if (mode == 0) {
        if (sub_ids.includes(req.body.user_id)) {
          console.log("entered mode 0");
          res.send({ Ack: "You are already a subcriber to the room" });
        } else {
          sub_ids.push(req.body.user_id);

          console.log("sub:", sub_ids);
          const room_update_result = await room.update(
            { sub_user_ids: sub_ids },
            { where: { room_name: req.body.room_name } }
          );
          console.log("entered else", room_update_result);
          if (room_update_result > 0) {
            res.send({ Ack: "You have joined the room!" });
          } else {
            res.send({ Ack: "Data not updated " });
          }
        }
      }
      if (mode == 1) {
        if (pub_ids.includes(req.body.user_id)) {
          res.send({ Ack: "You are already a publisher to the room" });
        } else {
          pub_ids.push(req.body.user_id);
          const room_update_result = await room.update(
            { pub_user_ids: pub_ids },
            { where: { room_name: req.body.room_name } }
          );
          if (room_update_result > 0) {
            res.send({ Ack: "You have joined the room!" });
          } else {
            res.send({ Ack: "Data not updated " });
          }
        }
      }
      if (mode == 2) {
        if (pub_ids.includes(req.body.user_id)) {
        } else {
          pub_ids.push(req.body.user_id);
        }
        if (sub_ids.includes(req.body.user_id)) {
        } else {
          sub_ids.push(req.body.user_id);
        }

        const room_update_result = await room.update(
          { sub_user_ids: sub_ids, pub_user_ids: pub_ids },
          { where: { room_name: req.body.room_name } }
        );
        if (room_update_result > 0) {
          res.send({ Ack: "You have joined the room!" });
        } else {
          res.send({ Ack: "Data not updated " });
        }
      }
    } else {
      res.send({ Ack: "Not authorized to update the role" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

module.exports = {
  add,
  update,
  get,
  putMessage,
  encrypt,
  decrypt,
  joinRoom,
  upgradeRole,
};
