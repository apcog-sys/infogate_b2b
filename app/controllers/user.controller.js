const { ValidationError } = require("sequelize");
const db = require("../models");
const Sequelize = require("sequelize");
const { request } = require("express");
const user = db.user_register;
const roles = db.role_master;
var randomToken = require("random-token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res) => {
  // Validate request
  try {
    console.log(req.body);
    const results = await user.findAll({
      where: { user_name: req.body.user_name, password: req.body.password },
    });

    //console.log("result:",results)

    if (results.length == 0) {
      res.send({ Ack: "Invalid user_name or password" });
    } else {
      // user matched, send token
      const secretKey = process.env.SECRET || "";
      const token = jwt.sign({ id: results[0].id.toString() }, secretKey, {
        expiresIn: "24h",
      });
      if (token) {
        res.send({ result: results[0], token });
      } else {
        res.send({ Ack: "Token expired!" });
      }
    }
  } catch (err) {
    return { message: err.message };
  }
};

const getCurrentUser = async function (userid) {
  try {
    const user_results = await user.findOne({ where: { id: userid } });
    return user_results;
  } catch (err) {
    return { message: err.message };
  }
};

const add = async (req, res, next) => {
  try {
    // if((req.body.role == "super_admin"))
    // {
    //to get the role  of current_user
    //await userDetails(req);
    let key = randomToken(32);
    req.body.account_key = key;
    console.log(req.body);
    const result = await user.create(req.body);
    if (result.dataValues.user_id) {
      res.send({
        Ack: "Add data successfull " + "with id: " + result.dataValues.user_id,
      });
    } else {
      res.send({ Ack: "Data not added! " });
    }
    //  }
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(err.status || 500).json({ status: err.errors[0].message });
    }
  }
};

const update = async (req, res) => {
  try {
    // await userDetails(req);
    // if((req.body.role == "super_admin"))
    // {
    let condition = req.body.where;
    const result = await user.update(req.body.what, { where: condition });

    if (result > 0) {
      res.send({ Ack: "Data update successfull" });
    } else {
      res.send({ Ack: "Data not updated " });
    }
    // }
    {
      res.send({ Ack: "Not authorized to create a user" });
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
        result = await user.findAll({
          where: req.body.where,
          attributes: req.body.what,
        });
      } else {
        result = await user.findAll({ where: req.body.where });
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

module.exports = { login, getCurrentUser, add, update, get };
