var db = require("../models");

module.exports = function (app) {

  app.get("/api/v1/items/all", function (req, res) {
    try {
      db.Item.findAll({}).then(function (dbItem) {
        res.status(200).json(dbItem);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/items/low", function (req, res) {
    try {
      var query = {
        "low": db.sequelize.where(
          db.sequelize.literal("quantity"),
          "<",
          db.sequelize.literal("alertOnQuantity"))
      };

      db.Item.findAll({
        where: query
      }).then(function (dbItem) {
        res.json(dbItem);
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/items/expired", function (req, res) {
    try {
      var query = {
        "expired": db.sequelize.where(
          db.sequelize.fn("now"),
          ">",
          db.sequelize.literal("expirationDate"))
      };

      db.Item.findAll({
        where: query
      }).then(function (dbItem) {
        res.json(dbItem);
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/items/:uuid", function (req, res) {
    try {
      var query = {};
      query.uuid = req.params.uuid;

      db.Item.findOne({
        where: query
      }).then(function (dbItem) {
        res.json(dbItem);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.post("/api/v1/items", function (req, res) {
    try {
      delete req.body.uuid;
      db.Item.create(req.body).then(function (dbItem) {
        res.status(200).json(dbItem);
      }).catch(function (err) {
        console.log(err.message);
        res.status(400).json(err.message);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.put("/api/v1/items/", function (req, res) {
    try {
      var query = {};
      query.uuid = req.body.uuid;

      db.Item.update(
        req.body, {
          where: query
        }).then(function (dbItem) {
          res.json(dbItem);
        }).catch(function (err) {
          console.log(err.message);
          res.status(400).json(err.message);
        });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.delete("/api/v1/items/:uuid", function (req, res) {
    try {
      var query = {};
      query.uuid = req.params.uuid;

      db.Item.destroy({
        where: query
      }).then(function (results) {
        res.json(results);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });
};
