const notificationRoutes = require("./notification_targets.routes");
const rolesRoutes = require("./roles_permissions.routes");
const entityRoutes = require("./entity.routes");
const keyRoutes = require("./key_register.routes");
const userRoutes = require("./user_register.routes");
const roomRoutes = require("./room.routes");
const inboxRoutes = require("./inbox.routes");
const msgRoutes = require("./msg.routes");
const archiveRoutes = require("./archive.routes");
const tempRoutes = require("./temp_register.routes");

const appRoutes = (app) => {
  app.use("/notification", notificationRoutes);
  app.use("/roles", rolesRoutes);
  app.use("/entity", entityRoutes);
  app.use("/key", keyRoutes);
  app.use("/user", userRoutes);
  app.use("/room", roomRoutes);
  app.use("/inbox", inboxRoutes);
  app.use("/msg", msgRoutes);
  app.use("/archive", archiveRoutes);
  app.use("/temp", tempRoutes);
};

module.exports = appRoutes;
