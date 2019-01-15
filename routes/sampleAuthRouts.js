module.exports = function(app, checkJwt) {
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
};
