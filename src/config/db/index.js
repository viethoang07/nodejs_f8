const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_dev");
    console.log("successfully");
  } catch (error) {
    console.log("nguu như chó");
  }
}

module.exports = { connect };
