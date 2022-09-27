module.exports = (sequelize, DataTypes) => {
  const Inbox = sequelize.define(
    "inbox",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      target_userid: {
        type: DataTypes.STRING,
      },
      room_id: {
        type: DataTypes.INTEGER,
      },
      in_stamp: {
        type: DataTypes.DATE,
        isAfter: "2020-11-05",
      },
      out_stamp: {
        type: DataTypes.DATE,
        isBefore: "2011-11-05",
      },
      when_to_deliver: {
        type: DataTypes.DATE,
        isBefore: "2011-11-05",
      },
      delivery_stamp: {
        type: DataTypes.DATE,
      },
      msg_id: {
        type: DataTypes.INTEGER,
      },
      retries: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Inbox;
};
