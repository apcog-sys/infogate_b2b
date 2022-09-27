module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("rooms", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      notEmpty: true,
      autoIncrement: true,
    },
    room_name: {
      type: DataTypes.STRING,
      unique: true,
      notEmpty: true,
    },
    deafult_mode: {
      type: DataTypes.INTEGER,
    },
    message_types: {
      type: DataTypes.JSON,
    },
    pub_user_ids: {
      type: DataTypes.JSON,
    },
    sub_user_ids: {
      type: DataTypes.JSON,
    },
    room_type: {
      type: DataTypes.STRING,
    },
    q_limit: {
      type: DataTypes.INTEGER,
      max: 80,
    },
    q_occupancy: {
      type: DataTypes.INTEGER,
      max: 90,
    },
    timeout: {
      type: DataTypes.INTEGER,
    },
    retries: {
      type: DataTypes.INTEGER,
    },
  });

  return Room;
};
