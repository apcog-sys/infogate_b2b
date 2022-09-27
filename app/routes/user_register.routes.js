const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const user = require("../controllers/user.controller");
const email = require("../controllers/email_verification.controller");

router.route("/login").post(function (req, res) {
  user.login(req, res);
});

router.route("/add").post(auth(), function (req, res) {
  user.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  user.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  user.get(req, res);
});

router.route("/send_email").post(auth(), function (req, res) {
  email.sendMail(req, res);
});

module.exports = router;
