const HttpException = require("../utils/HttpException.utils");
const UserModel = require("../controllers/user.controller");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = (...roles) => {
  return async function (req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const bearer = "Bearer ";

      if (!authHeader || !authHeader.startsWith(bearer)) {
        res.send({ Ack: "Access denied no credentials sent" });
      }

      const token = authHeader.replace(bearer, "");
      if (!token) return res.status(403).send("Access denied.");

      const secretKey = process.env.SECRET || "";

      // Verify Token
      const decoded = jwt.verify(token, secretKey);
      //console.log(decoded)
      const user_details = await UserModel.getCurrentUser(decoded.id);

      // console.log("user:::",user_details)

      const user_role = user_details.role_ids;
      const user_id = user_details.id;

      //console.log(user_role)

      if (!user_role) {
        res.send({ Ack: "401, Authentication failed!" });
      }

      if (user_role == 1) {
        req.currentRole = "super_admin";
      }
      if (user_role == 2) {
        req.currentRole = "entity_admin";
      }
      if (user_role == 3) {
        req.currentRole = "user";
      }
      if (user_role == 4) {
        req.currentRole = "application";
      }
      if (user_role == 5) {
        req.currentRole = "role0_app";
      }

      req.currentUser = user_id;

      // console.log("request::", req.currentRole, req.currentUser)
      //req.currentRole = user_role;
      next();
    } catch (e) {
      e.status = 401;
      next(e);
    }
  };
};

module.exports = auth;
