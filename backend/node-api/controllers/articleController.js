var mongoose = require("mongoose"),
  Article = mongoose.model("Articles");

// 全てのタスクを取得する。
exports.all_articles = function (req, res) {
  Article.find({}, function (err, article) {
    if (err) res.send(err);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.json(article);
  });
};

// 新しいタスクを作成する。
exports.create_article = function (req, res) {
  var new_article = new Article(req.body);
  new_article.save(function (err, article) {
    if (err) res.send(err);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.json(article);
  });
};

// 特定のタスクを取得する。
exports.load_article = function (req, res) {
  Article.findById(req.params.articleId, function (err, article) {
    if (err) res.send(err);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.json(article);
  });
};

// 特定のタスクを更新する。
exports.update_article = function (req, res) {
  Article.findOneAndUpdate(
    { _id: req.params.articleId },
    req.body,
    { new: true },
    function (err, article) {
      if (err) res.send(err);
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
      res.json(article);
    }
  );
};

// 特定のタスクを削除する。
exports.delete_article = function (req, res) {
  Article.remove(
    {
      _id: req.params.articleId,
    },
    function (err, article) {
      if (err) res.send(err);
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
      res.json({ message: "Article successfully deleted" });
    }
  );
};
