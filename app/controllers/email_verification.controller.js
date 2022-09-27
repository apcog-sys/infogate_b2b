var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const { User } = require("../models/user_register.models");
const db = require("../models");
const entity = db.entity_register;

const sendMail = async (req, res) => {
  try {
    console.log("request::", req);
    var receiver = req.body.receiver;
    var message = req.body.message;
    var transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: "infogateb2b@gmail.com",
          pass: "sselwwgpfqojwdvo",
        },
      })
    );

    let counter = 1;
    while (counter <= 1000) {
      counter = counter + 1;
    }

    if (message == "") {
      var mailOptions = {
        from: "infogateb2b@gmail.com",
        to: receiver,
        subject: "Account Verification Link",
        text:
          "Greetings from infogate!, " +
          ",\n\n" +
          "This is a verification mail, Please verify yourself by clicking on the link below if you are trying to enroll into infogate: \nwww.localhost:3000//" +
          activation_code +
          "/confirmation/" +
          "/" +
          "\n\nThanks and Regards,Team infogate \n" +
          counter,
      };
    } else {
      var mailOptions = {
        from: "infogateb2b@gmail.com",
        to: receiver,
        subject: "Account Verification Link",
        text: message,
      };
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(400).send("An error occured while sending the email");
  }
};

const verifyLink = async (req, res, next) => {
  try {
    const user = await entity.findOne({ id: req.activation_code });
    if (!user) return res.status(400).send("Invalid link");

    const token = await Token.findOne({
      userId: user._id,
      token: req.body.token,
    });
    if (!token) return res.status(400).send("Invalid link");

    await User.updateOne({ _id: user._id, verified: true });
    await Token.findByIdAndRemove(token._id);

    res.send("email verified sucessfully");
  } catch (error) {
    res.status(400).send("An error occured");
  }
};

module.exports = { verifyLink, sendMail };
