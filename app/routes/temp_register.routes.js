const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const temp_reg = require("../controllers/temp_user_register");

router.route("/add").post(function (req, res) {
  temp_reg.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  temp_reg.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  temp_reg.get(req, res);
});

module.exports = router;
