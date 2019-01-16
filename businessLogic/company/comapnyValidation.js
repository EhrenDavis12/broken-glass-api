 var db = require("../../models");

// module.exports = function () {

// return  function test1(){  return "company found";}

// };



const ComVal = function() {
    this.basicMeg = () => {
      return "test1 is working!";
    };

    this.companyCheck = (pid) => {
        //1. query company id to see if it exists. 
        //if it exists return true
        db.Company.findAll({
          where:{
            id: pid 
          }
        }).then(function (res) {
          console.log("results from query: ");
          console.log(res[0].id);
          if(res.length>0){
            return true;
          }
          else{
            //in this case we need to add the company data to our database
            return false;
          }
        });
        return "companyCheck is working! this is my id: " + id;

    };

    this.jobCheck(JobDescription) = (pid) => {
    //in here check to see if the job description already exists in the database. 
    //if not add to jobType table. if it does get id and pass to review
    
    }
  };
  
  module.exports = ComVal;