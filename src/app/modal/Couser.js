const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  description: { type: String },
  img: { type: String },
  updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", Course);

