var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: "Enter the title of the article"
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  content : {
    type: String,
    required: "Enter the content of the article"
  },
  image_url : {
    type: String
  }
});

module.exports = mongoose.model("Articles", articleSchema);