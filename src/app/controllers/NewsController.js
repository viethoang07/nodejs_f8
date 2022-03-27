const res = require("express/lib/response");
const { show } = require("./CourseController");

class NewsController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("slug");
  }
}

module.exports = new NewsController();
