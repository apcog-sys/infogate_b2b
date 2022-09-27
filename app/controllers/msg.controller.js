const db = require("../models");
const Sequelize = require("sequelize");
const { request } = require("express");
const req = require("express/lib/request");
const Op = Sequelize.Op;
const { ValidationError } = require("sequelize");
const Msg = db.msg_q;
const inbox = db.inbox;
const key = db.key_register;
const room = db.rooms;
const temp = db.temp_user_register;

const add = async (req, res, next) => {
  try {
    // to get the role of current_user
    await userDetails(req);
    if (req.body.role == "super_admin") {
      const result = await Msg.create(req.body);
      if (result.dataValues.id) {
        res.send({
          Ack: "Add data successfull " + "with id: " + result.dataValues.id,
        });
      } else {
        res.send({ Ack: "Data not added! " });
      }
    } else {
      res.send({ Ack: "Not authorized to create msg_q" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const update = async (req, res) => {
  try {
    // to get the role of current_user
    await userDetails(req);
    if (req.body.role == "super_admin") {
      let condition = req.body.where;
      const result = await Msg.update(req.body.what, { where: condition });
      if (result > 0) {
        res.send({ Ack: "Data update successfull" });
      } else {
        res.send({ Ack: "Data not updated " });
      }
    } else {
      res.send({ Ack: "Not authorized to update msg_q" });
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
      if (req.body.what != null) {
        result = await Msg.findAll({
          where: req.body.where,
          attributes: req.body.what,
        });
      } else {
        result = await Msg.findAll({ where: req.body.where });
      }
      res.status(200).send(result);
    } else {
      res.send({ Ack: "Not authorized to get inbox" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const pullMessages = async (req, res) => {
  try {
    await userDetails(req);
    if (req.body.role == "super_admin") {
      var key_result = await key.findOne({ where: { key: req.body.room_key } });

      if (key_result.length == 0) {
        res.send({ Ack: "Room key is invalid!" });
      } else {
        var inbox_result = await inbox.findAll({
          where: {
            target_userid: req.body.user_id,
            room_id: key_result.dataValues.room_id,
            status: "pending",
          },
        });

        if (inbox_result.length == 0) {
          res.send({ Ack: "No pending messages or invalid room_id" });
        } else {
          var msgq_result = await Msg.findAll({
            where: { id: inbox_result[0].msg_id },
          });

          // send room_id and msg to the user
          const result = {
            room_id: key_result.dataValues.room_id,
            msg: msgq_result[0].msg_body,
          };

          res.send(result);
        }
        res.status(200).send(result);
      }
    } else {
      res.send({ Ack: "Not authorized to get inbox" });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const userDetails = async (req) => {
  if (req.body) {
    req.body.role = req.currentRole;
    req.body.user_id = req.currentUser;
  }
};

module.exports = {
  add,
  update,
  get,
  pullMessages,
};
