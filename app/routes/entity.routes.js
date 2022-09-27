const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const entity = require("../controllers/entity.controller");

router.route("/add").post(auth(), function (req, res) {
  entity.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  entity.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  entity.get(req, res);
});

module.exports = router;
