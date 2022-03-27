const Acount = require("../models/Acount");

class AcountController {
  //get logins
  index(req, res) {
    res.render("acount/login");
  }

  //get register
  register(req, res) {
    res.render("acount/register");
  }

  // post logins
  create(req, res) {
    const acount = new Acount(req.body);
    acount
      .save()
      .then(() => res.redirect("/acount"))
      .catch((error) => {});
  }

  //post logins
  async login(req, res, next) {
    const { username, password } = req.body;
    try {
      const data = await Acount.findOne({
        username,
        password,
      });
      if (!data) {
        res.send("đéo được đâu");
      } else {
        res.redirect("/");
      }
    } catch (next) {}
  }
}

module.exports = new AcountController();
