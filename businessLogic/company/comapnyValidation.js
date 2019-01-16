 var db = require("../../models");



const ComVal = function() {
    this.basicMeg = () => {
      return "test1 is working!";
    };

    this.companyCheck = (body,pres, insertCompany) => {
        //1. query company id to see if it exists. 
        //if it exists return true
        db.Company.findAll({
          where:{
            id: body.googleMapsId 
          }
        }).then(function (res) {
          console.log("results from query: ");
          // console.log(res[0].id);
         
          if(res.length>=0){
            console.log("already exist");
            return true;
          }
          else{
            //in this case we need to add the company data to our database
           
           db.Company.create({
            id: body.id,
            googleMapId: body.company.googleMapId,
            companyName: body.company.category,
            averageRating: body.company.averageRating,
            reviewCount: body.company.reviewCount,

           }).then(function (res1){
              insertCompany(body, res)
           })

           return false;
          }

        });
        // return "companyCheck is working!" ;

    };

    this.insertReview= (body, res) => {

        
      db.Review.create({
        uuid: body.review.uuid,
        userId: body.review.userId,
        shiftPayComent: body.review.shiftPayComent,
        shiftPayRating: body.review.shiftPayRating,
        managementComment: body.review.managementComment,
        managementRating: body.review.managementRating,
        busyComment: body.review.busyComment,
        busyRating: body.review.busyRating,
        customerComment: body.review.customerComment,
        customerRating: body.review.customerRating,
        overallComment: body.review.overallComment,
        overallRating: body.review.overallRating,
        companyId: body.review.companyId,
        JobTypeId: body.review.JobTypeId,
        PayTypeId:body.review.PayTypeId


       }).then(function (res1){
          res.status(200).json("Review has been added!")
       })

    }; //end comapny insert

  };
  
  module.exports = ComVal;