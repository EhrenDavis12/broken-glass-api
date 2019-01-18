const { checkJwt, checkRole, checkScope } = require("./auth0/auth0");

module.exports = function(app) {
  app.get("/api/v1/public", function(req, res) {
    try {
      res.status(200).json("Hello from a public API");
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/private", checkJwt, function(req, res) {
    try {
      res.status(200).json("Hello from a private API");
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/review", checkJwt, checkScope(["read:review"]), function(
    req,
    res
  ) {
    try {
      res.status(200).json("Hello you may read private reviews");
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/admin", checkJwt, checkRole("admin"), function(req, res) {
    try {
      res.status(200).json("Hello from an admin API");
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });
};
