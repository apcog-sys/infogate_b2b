const crypto = require("crypto");

// let msg = "hello";
// let key = "vjea24nr8yvwr42u56n3pwc6szmshc1p"

const encryptMsg = async function (msg, key) {
  // make the encrypter function
  const iv = crypto.randomBytes(16);
  const encrypter = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encryptedMsg = encrypter.update(msg, "utf-8", "hex");

  encryptedMsg += encrypter.final("hex");
  encryptedMsg = encryptedMsg + "|" + Buffer.from(iv).toString("hex");

  return encryptedMsg;
};

const decrypMsg = async function (encryptedMsg, key) {
  // get iv, encrypted msg from encryptedMsg
  var [encrypted, iv] = encryptedMsg.split("|");
  if (!iv) throw new Error("IV not found");

  // decrypter function
  iv = Buffer.from(iv, "hex");
  const decrypter = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decryptedMsg = decrypter.update(encrypted, "hex", "utf8");
  decryptedMsg += decrypter.final("utf-8");

  return decryptedMsg;
};

module.exports = { encryptMsg, decrypMsg };
