const adminRouter = require("./Admin/admin");
const userRouter = require("./User/user");
const queryRouter = require("./Query/query");
const filesRouter = require("./Files/files");

exports.setupRoutes = (app) => {
  app.use("/admin", adminRouter);
  app.use("/query", queryRouter);
  app.use("/files", filesRouter);
  app.use("/user", userRouter);
};
