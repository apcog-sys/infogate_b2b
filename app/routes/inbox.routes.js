const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const inbox = require("../controllers/inbox.controller");

router.route("/add").post(auth(), function (req, res) {
  inbox.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  inbox.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  inbox.get(req, res);
});

module.exports = router;
