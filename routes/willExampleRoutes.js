//var db = require("../models");

const ComVal = require("../businessLogic/company/comapnyValidation");

module.exports = function(app) {
  app.get("/api/v1/willsTest/:id", function(req, res) {
    try {
      const comVal = new ComVal();
      res.json(comVal.basicMeg());
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  //start review post
  app.post("/api/v1/testreview", function (req, res) {
    try {
     const comVal = new ComVal();
     console.log("params: " + req.body.id);
     const msg = comVal.companyCheck(req.body,res, comVal.insertCompany);
     res.json(msg);
    } catch (err) {
      console.log(err);
      
      res.status(400).json("Invalid request");
    }



  });

  //end review post
  

};