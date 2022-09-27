const db = require("../models");
const Sequelize = require("sequelize");
const { request } = require("express");
const req = require("express/lib/request");
const Op = Sequelize.Op;
const { ValidationError } = require("sequelize");
var randomToken = require("random-token");
entity = db.entity_registers;

const add = async (req, res) => {
  try {
    // to get the role of current_user
    await userDetails(req);

    if (req.body.role == "super_admin") {
      let activation_code = randomToken(16); // code eg: qwerasdfzxcv8523654#$%@^&*
      req.body.activation_code = activation_code;

      const result = await entity.create(req.body);
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
    // call verification function
    // collect admins email, phone no, activation code.
    //  send the message in the proper format via email or sms
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const update = async (req, res) => {
  try {
    await userDetails(req);
    if (req.body.role == "super_admin" || req.body.role == "admin") {
      let condition = req.body.where;
      const result = await entity.update(req.body.what, { where: condition });

      if (result > 0) {
        res.send({ Ack: "Data update successfull " });
      } else {
        res.send({ Ack: "Data not updated " });
      }
    } else {
      res.send({ Ack: "Not authorized to update an entity" });
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
    // to get the current user
    console.log(req.body);
    if (req.body.role == "super_admin") {
      if (req.body.what != null) {
        result = await entity.findAll({
          where: req.body.where,
          attributes: req.body.what,
        });
      } else {
        result = await entity.findAll({ where: req.body.where });
      }
      res.status(200).send(result);
    } else {
      res.send({ Ack: "Not authorized to update an entity" });
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
};
