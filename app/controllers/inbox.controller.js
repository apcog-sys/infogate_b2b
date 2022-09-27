const db = require("../models");
const Sequelize = require("sequelize");
const { request } = require("express");
const req = require("express/lib/request");
const Op = Sequelize.Op;
const { ValidationError } = require("sequelize");
var randomToken = require("random-token");
const inbox = db.inbox;

const add = async (req, res, next) => {
  try {
    // to get the role & app_key of current_user
    await userDetails(req);
    if (req.body.role == "super_admin") {
      const result = await inbox.create(req.body);
      if (result.dataValues.id) {
        res.send({
          Ack: "Add data successfull " + "with id: " + result.dataValues.id,
        });
      } else {
        res.send({ Ack: "Data not added! " });
      }
    } else {
      res.send({ Ack: "Not authorized to create an inbox" });
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
      const result = await inbox.update(req.body.what, { where: condition });

      if (result > 0) {
        res.send({ Ack: "Data update successfull" });
      } else {
        res.send({ Ack: "Data not updated " });
      }
    } else {
      res.send({ Ack: "Not authorized to update an inbox" });
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
        result = await inbox.findAll({
          where: req.body.where,
          attributes: req.body.what,
        });
      } else {
        result = await inbox.findAll({ where: req.body.where });
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
