module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define(
    "key_register",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      key: {
        type: DataTypes.STRING,
        unique: true,
        notEmpty: true,
      },
      room_id: {
        type: DataTypes.INTEGER,
      },
      entity_id: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
      app_id: {
        type: DataTypes.INTEGER,
        notEmpty: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        notEmpty: true,
      },
      sub_msg_types: {
        type: DataTypes.JSON,
      },
      pub_msg_types: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    { sequelize }
  );

  return Key;
};
