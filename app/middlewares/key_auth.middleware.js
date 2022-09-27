const HttpException = require("../utils/HttpException.utils");
const UserModel = require("../controllers/user.controller.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = (...roles) => {
  return async function (req, res, next) {
    try {
      if (req.body == "") {
        throw new HttpException(401, "Please provide the key!");
      }
      const key_result = await UserModel.getCurrentUser(req);

      //console.log("result in auth::", key_result)

      //if(key_result == "null"){throw new HttpException(404, "User doesnot exists!");}

      if (!key_result) {
        throw new HttpException(401, "Authentication failed!");
      }

      // if the user has permissions
      req.currentRole = key_result;
      // console.log("in auth:", req.currentRole)
      next();
    } catch (e) {
      e.status = 401;
      next(e);
    }
  };
};

module.exports = auth;
