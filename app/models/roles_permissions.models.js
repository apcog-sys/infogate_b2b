module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define(
    "roles_permissions",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        notEmpty: true,
        autoIncrement: true,
      },
      permissions: {
        type: DataTypes.STRING,
      },
      super_admin: {
        type: DataTypes.BOOLEAN,
      },
      entity_admin: {
        type: DataTypes.BOOLEAN,
      },
      user: {
        type: DataTypes.BOOLEAN,
      },
      application: {
        type: DataTypes.BOOLEAN,
      },
      role0_application: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );

  return Roles;
};
