const dbConfig = require("../config/db.config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {
    freezeTableName: true,
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.entity_registers = require("./entity_register.models")(sequelize, DataTypes);
db.user_register = require("./user_register.models")(sequelize, DataTypes);
db.key_register = require("./key_register.models")(sequelize, DataTypes);

db.rooms = require("./rooms.models")(sequelize, DataTypes);
db.inbox = require("./inbox.models")(sequelize, DataTypes);
db.msg_q = require("./msg_q.models")(sequelize, DataTypes);
db.archive = require("./archive.models")(sequelize, DataTypes);

db.roles_permissions = require("./roles_permissions.models")(
  sequelize,
  DataTypes
);
db.notification_targets = require("./notification_targets.models")(
  sequelize,
  DataTypes
);
db.temp_user_register = require("./temp_user_register.models")(
  sequelize,
  DataTypes
);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
