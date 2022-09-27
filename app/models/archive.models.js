module.exports = (sequelize, DataTypes) => {
  const Archive = sequelize.define(
    "archive",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      inbox_id: {
        type: DataTypes.BIGINT,
        unique: true,
        notEmpty: true,
      },
      target_entity: {
        type: DataTypes.STRING,
      },
      room_id: {
        type: DataTypes.BIGINT,
      },
      in_stamp: {
        type: DataTypes.DATE,
      },
      out_stamp: {
        type: DataTypes.DATE,
      },
      delivery_stamp: {
        type: DataTypes.DATE,
      },
      msg_id: {
        type: DataTypes.BIGINT,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Archive;
};
