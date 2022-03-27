const Courses = require("../models/Course");
const { multileMongooseToobject } = require("../../ulti/mongoose");
class SiteController {
  index(req, res, next) {
    Courses.find({})
      .then((courses) =>
        res.render("home", { courses: multileMongooseToobject(courses) })
      )
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
