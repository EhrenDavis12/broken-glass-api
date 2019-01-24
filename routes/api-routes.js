var db = require("../models");

const ComVal = require("../businessLogic/company/comapnyValidation");



module.exports = function(app) {
  //start review post
  app.post("/api/v1/review", function (req, res) {
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




  //start job get
  app.get("/api/v1/jobs", function(req, res) {
    try {
      //start query
      db.JobType.findAll({}).then(function (jobs) {
        res.json(jobs);
      });
      //end query
    } catch (err) {
      console.log(err);
      res.status(400).json("Invalid request from: jobs");
    }
  });
  //end job get





  //start payType
  app.get("/api/v1/pay", function(req, res) {
    try {
      //start query
      db.PayType.findAll({}).then(function (jobs) {
        res.json(jobs);
      });
      //end query
    } catch (err) {
      console.log(err);
      res.status(400).json("Invalid request from: jobs");
    }
  });
  //end payType





  //start get all Reviews
  app.get("/api/v1/allreviews/:CompanyId", function(req, res) {
    try {
      //start query
      var query = {};
      if (req.query.JobTypeId) {
        query.JobTypeId = req.query.JobTypeId;
      }



      db.Review.findAll({
        where:{
          CompanyId: req.params.CompanyId
        },
        include: [db.JobType]
      }).then(function (jobs) {
        res.json(jobs);
      });
      //end query
    } catch (err) {
      console.log(err);
      res.status(400).json("Invalid request from: jobs");
    }
  });
  //end get all Reviews





  //start get 1 Review
  app.get("/api/v1/onereview/:uuid", function(req, res) {
    try {
      //start query

      db.Review.findAll({
        limit: 1,
        where:{
          CompanyId: req.params.uuid
        }
      }).then(function (jobs) {
        res.json(jobs);
      });
      //end query
    } catch (err) {
      console.log(err);
      res.status(400).json("Invalid request from: jobs");
    }
  });
//end get 1 review



//Update Review here 


app.put("/api/v1/updatereview", function(req, res) {
  console.log(req.body)
  try {
    //start query

    db.Review.update(
      {
        shiftPayComent: req.body.review.shiftPayComent,
        shiftPayRating: req.body.review.shiftPayRating,
        managementComment: req.body.review.managementComment,
        managementRating: req.body.review.managementRating,
        busyComment: req.body.review.busyComment,
        busyRating: req.body.review.busyRating,
        customerComment: req.body.review.customerComment,
        customerRating: req.body.review.customerRating,
        overallComment: req.body.review.overallComment,
        overallRating: req.body.review.overallRating,
      },
      {
      where:{
        uuid: req.body.review.uuid
      }
    }).then(function (jobs) {
      res.json(jobs);
    });
    //end query
  } catch (err) {
    console.log(err);
    res.status(400).json("Invalid request from: update");
  }

});


//end update review
  

};