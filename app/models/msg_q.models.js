module.exports = (sequelize, DataTypes) => {
  const Msg_q = sequelize.define("msg_q", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      notEmpty: true,
      autoIncrement: true,
    },
    msg_body: {
      type: DataTypes.STRING,
      unique: true,
      notEmpty: true,
    },
  });

  return Msg_q;
};
