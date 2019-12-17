const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(
      [
        "/goals",
        "/daily-tasks",
        "/list-learn",
        "/accomplishments",
        "/evaluation"
      ],
      { target: "http://localhost:5000" }
    )
  );
};
