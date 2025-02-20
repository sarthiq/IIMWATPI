const adminRouter = require("./Admin/admin");

exports.setupRoutes = (app) => {
  app.use("/admin", adminRouter);
};
