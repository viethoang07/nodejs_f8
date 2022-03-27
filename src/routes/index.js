const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const acountRouter = require("./acount");
const siteRouter = require("./site");
function route(app) {
  app.use("/acount", acountRouter);
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}
module.exports = route;
