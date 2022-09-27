const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const archive = require("../controllers/archive.controller");

router.route("/add").post(auth(), function (req, res) {
  archive.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  archive.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  archive.get(req, res);
});

module.exports = router;
