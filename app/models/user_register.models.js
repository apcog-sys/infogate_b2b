module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user_register",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
      password: {
        type: DataTypes.STRING,
        unique: true,
        notEmpty: true,
      },
      account_key: {
        type: DataTypes.STRING,
        unique: true,
        notEmpty: true,
      },
      entity_name: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
      role_name: {
        type: DataTypes.STRING,
      },
      contact_details: {
        type: DataTypes.JSON,
      },
      person_or_app_name: {
        type: DataTypes.STRING,
      },
      role_ids: {
        type: DataTypes.STRING,
      },
      pub_rooms: {
        type: DataTypes.JSON,
      },
      sub_rooms: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};
