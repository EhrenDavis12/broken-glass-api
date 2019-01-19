var db = require("../../models");

const ComVal = function () {
  this.basicMeg = () => {
    return "test1 is working!";
  };

  insertReview = (body, res) => {

    db.Review.create({
      // uuid: body.review.uuid,
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
      CompanyId: body.company.id,
      JobTypeId: body.review.JobTypeId,
      PayTypeId: body.review.PayTypeId

    }).then(function (res1) {
    })
  };

  this.companyCheck = (body, pres) => {

    db.Company.findAll({
      where: {
        googleMapId: body.company.googleMapId
      }
    }).then(function (res) {
      console.log("results from query: ");
      console.log(res.length);

      if (res.length >= 1) {
        console.log("already exist");
        insertReview(body, pres);
        return true;
      }
      else {
        //in this case we need to add the company data to our database

        db.Company.create({
          id: body.company.id,
          googleMapId: body.company.googleMapId,
          companyName: body.company.category,
          averageRating: body.company.averageRating,
          reviewCount: body.company.reviewCount,

        }).then(function (pres) {
          insertReview(body, pres);
          console.log("company has been added!");
        })
        return false;
      }

    });
  };
};

module.exports = ComVal;