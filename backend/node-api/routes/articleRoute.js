// api.p-study.com
module.exports = function (app) {
  var articleList = require("../controllers/articleController");
  // api.p-study.com/articles
  app
    .route("/articles")
    .get(articleList.all_articles)
    .post(articleList.create_article);

  // api.p-study.com/articles/12
  app
    .route("/articles/:articleId")
    .get(articleList.load_article)
    .put(articleList.update_article)
    .delete(articleList.delete_article);
};
