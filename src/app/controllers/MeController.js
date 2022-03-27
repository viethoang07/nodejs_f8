const Courses = require("../models/Course");
const { multileMongooseToobject } = require("../../ulti/mongoose");
class MeController {
  storedCourses(req, res, next) {
    Courses.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: multileMongooseToobject(courses),
        })
      )
      .catch(next);
  }
  //[get] trash
  trashCourses(req, res, next) {
    Courses.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multileMongooseToobject(courses),
        })
      )
      .catch(next);
  }
}
module.exports = new MeController();
