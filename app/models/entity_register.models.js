module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define(
    "entity_register",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      entity_name: {
        type: DataTypes.STRING,
        unique: true,
        notEmpty: true,
      },
      room_ids: {
        type: DataTypes.JSON,
      },
      activation_code: {
        type: DataTypes.STRING,
        unique: true,
        notEmpty: true,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    { sequelize }
  );

  return Entity;
};
