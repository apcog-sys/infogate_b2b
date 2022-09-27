const { ValidationError } = require("sequelize");
const db = require("../models");
const Sequelize = require("sequelize");
const { request } = require("express");
const temp_user = db.temp_user_register;
const user = db.user_register;
const roles = db.role_master;
var randomToken = require("random-token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const add = async (req, res, next) => {
  try {
    // to get the role  of current_temp_user
    //await temp_userDetails(req);

    console.log("req::", req.body);
    console.log("entity", req.body.requested_changes.entity_name);
    // to get the admin of the entity_type of use

    const user_find_result = await user.findAll({
      where: {
        entity_name: req.body.requested_changes.entity_name,
        role_name: "admin",
      },
    });

    // console.log("user_find_result_id::", user_find_result[0])
    req.body.approver_id = user_find_result[0].dataValues.id;
    req.body.status = "for_approval";

    const result = await temp_user.create(req.body);
    if (req.body.request_type == "new_user_register") {
      var requested_changes = req.body.requested_changes;
      let key = randomToken(32);
      req.body.requested_changes.account_key = key;
      req.body.requested_changes.status = "inactive";
      // console.log("req-changes::",  req.body.requested_changes)

      const user_result = await user.create(requested_changes);

      if (user_result.dataValues.id) {
        res.send({
          Ack:
            "Add data successfull " +
            "with user_id: " +
            user_result.dataValues.id,
        });
      } else {
        res.send({ Ack: "Data not added! " });
      }
    }
    if (result.dataValues.user_id) {
      res.send({
        Ack: "Add data successfull " + "with id: " + result.dataValues.user_id,
      });
    } else {
      res.send({ Ack: "Data not added! " });
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
      let condition = req.body.where;
      const result = await temp_user.update(req.body.what, {
        where: condition,
      });

      if (result > 0) {
        res.send({ Ack: "Data update successfull" });
      } else {
        res.send({ Ack: "Data not updated " });
      }
      // }
      {
        res.send({ Ack: "Not authorized to create a user" });
      }
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
    if (req.body.role == "super_admin" || req.body.role == "entity_admin") {
      // to get the current user
      if (req.body.what != null) {
        result = await temp_user.findAll({
          where: req.body.where,
          attributes: req.body.what,
        });
      } else {
        result = await temp_user.findAll({ where: req.body.where });
      }
      res.status(200).send(result);
    } else {
      res.send({ Ack: "Not authorized to get a user" });
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

module.exports = { add, update, get };
