var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Article = require("./models/articleModel"), // 作成したModelの読み込み
  bodyParser = require("body-parser"),
  cors = require("cors");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://admin:ainimemeda@cluster0.yuecz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/articleRoute"); // Routeのインポート
routes(app); //appにRouteを設定する。

app.use(cors());
// app.options("localhost:8080", cors());

app.listen(port); // appを特定のportでlistenさせる。

console.log("article RESTful API server started on: " + port);
