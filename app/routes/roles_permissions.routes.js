const express = require("express");
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const roles = require("../controllers/roles_permissions.controller");

router.route("/add").post(auth(), function (req, res) {
  roles.add(req, res);
});
router.route("/update").post(auth(), function (req, res) {
  roles.update(req, res);
});
router.route("/get").post(auth(), function (req, res) {
  roles.get(req, res);
});

module.exports = router;
