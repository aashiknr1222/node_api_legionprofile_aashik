const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const profiles = new Schema({
  _id : ObjectId,
  name: String,
  title: String,
  lastDate: Date,
  type: String
});

module.exports = mongoose.model('profiles', profiles);
