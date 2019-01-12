module.exports = function(app) {
  app.get("/api/v1/public", function(req, res) {
    try {
      res.json("Hello from a public API");
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });
};
