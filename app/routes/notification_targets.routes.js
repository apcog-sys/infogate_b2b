const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const notification = require("../controllers/notification_targets");

router.route("/add").post(auth(), function (req, res) {
  notification.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  notification.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  notification.get(req, res);
});

module.exports = router;
