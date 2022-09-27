module.exports = (sequelize, DataTypes) => {
  const notification_target = sequelize.define(
    "notification_targets",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      event: {
        type: DataTypes.STRING,
        unique: true,
        notEmpty: true,
      },
      notify_target_userids: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return notification_target;
};
