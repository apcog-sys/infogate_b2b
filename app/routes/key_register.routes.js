const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const key = require("../controllers/key.controller");

router.route("/add").post(auth(), function (req, res) {
  key.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  key.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  key.get(req, res);
});

module.exports = router;
