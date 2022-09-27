module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "temp_user_register",
    {
      request_id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
      request_type: {
        type: DataTypes.JSON,
      },
      requested_changes: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.STRING,
      },
      approver_id: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};
