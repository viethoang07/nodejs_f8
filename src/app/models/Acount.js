const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Acount = new Schema({
  username: { type: String, maxlength: 30 },
  password: { type: String, maxlength: 30 },
});

module.exports = mongoose.model("Acount", Acount);
