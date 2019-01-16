//var db = require("../models");

const ComVal = require("../businessLogic/company/comapnyValidation");

module.exports = function(app) {
  app.get("/api/v1/willsTest/:id", function(req, res) {
    try {
      const comVal = new ComVal();
      res.json(comVal.basicMeg());
      //res.json("Hello from a public API");
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  //start review post
  app.post("/api/v1/testreview/:id", function (req, res) {
    try {
     // delete req.body.uuid;
     const comVal = new ComVal();
     console.log("params: " + req.params.id);
     const msg = comVal.companyCheck(req.params.id)
     res.json(msg);
     /*
      db.Item.create(req.body).then(function (dbItem) {
        res.status(200).json(dbItem);
      }).catch(function (err) {
        console.log(err.message);
        res.status(400).json(err.message);
      });
      */
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  //end review post
  

};