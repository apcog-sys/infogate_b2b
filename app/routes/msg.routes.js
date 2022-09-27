const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const msg = require("../controllers/msg.controller");

router.route("/add").post(auth(), function (req, res) {
  msg.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  msg.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  msg.get(req, res);
});
router.route("/pullMessages").post(auth(), function (req, res) {
  msg.pullMessages(req, res);
});

module.exports = router;
