const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const room = require("../controllers/room.controller");

router.route("/add").post(auth(), function (req, res) {
  room.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  room.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  room.get(req, res);
});

router.route("/put_msg").post(auth(), function (req, res) {
  room.putMessage(req, res);
});
router.route("/joinRoom").post(auth(), function (req, res) {
  room.joinRoom(req, res);
});

router.route("/upgradeRole").post(auth(), function (req, res) {
  room.upgradeRole(req, res);
});

router.route("/encrypt").post(auth(), function (req, res) {
  room.encrypt(req, res);
});
router.route("/decrypt").post(auth(), function (req, res) {
  room.decrypt(req, res);
});

module.exports = router;
