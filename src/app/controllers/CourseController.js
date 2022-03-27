const Courses = require("../models/Course");
const { mongooseToObject } = require("../../ulti/mongoose");
class CourseController {
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((courses) => {
        res.render("courses/show", { courses: mongooseToObject(courses) });
      })
      .catch(next);
  }
  //[get]method
  create(req, res, next) {
    res.render("courses/create");
  }
  //[post]method
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const courses = new Courses(req.body);
    courses
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => {});
  }
  //[edit]
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  //[PUT]
  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[delete]/course/:id
  destroy(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[delete]/course/:id/force
  forceDestroy(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[patch] restore
  restore(req, res, next) {
    Courses.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
