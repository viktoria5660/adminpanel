
const router = require('express').Router(),
QuestionModel = require('../models/Question'),
QuestionHelper = require('../helpers/question'),
UserModel = require('../models/User'),
//   SettingsModel = require('../models/Settings'),
ObjectID = require('mongodb').ObjectID;


router.get('/:id', (req, res) => {
var questions;
var userEmail = req.params.id;

//Getting the user details from MongoDB
UserModel.findOne({email: userEmail}, function(err, user){
 if(err || !user){
  return res.status(500).send({message:"DB Error or the user does not exist!"});
 } 
console.log("USER FOUND BY EMAIL:",user);
 var incorrectAnsArr = user.incorrectAns;
 console.log ("INCORRECTARRAY: ",incorrectAnsArr);
 if(incorrectAnsArr.length){
      console.log("inside big if");
        var found = incorrectAnsArr.find(function(element){
          // console.log("inside found:");
            return element.numberOfTurns === 7 && element.attempts === 1 || element.numberOfTurns === 4 && element.attempts === 2
        });
//   console.log(incorrectAnsArr);
    console.log("FOUND QUESTION:",found)
    if (found)
        {
        var questionId = found.questionId;
        QuestionModel.findOne({_id:new ObjectID(questionId)},function(err,question){
          if(err) {
              return  res.status(500).send(handleError(err));
          }
          else {
              console.log("INSIDE FOUND :", question)
               res.send(question);
              return;
          }

        }); 
     }
    else (!found)
        {
            console.log("RANDOM ELSE");
            var objectIDArr = user.correctAns.map(el => ObjectID(el));
            QuestionModel.aggregate(
                [
                {
                    //add q status
                    $match: {
                    $and:[{groups:user.group},{difficulty: user.difficulty},{company: user.company},{_id:{$nin: objectIDArr}}]
                }
            },
            {
                     $sample:{size: 1 }
            }
            ], function(err,obj){
            if (err){
                res.status(401).json({
                    message: err
                  });
                   console.log("ERR",err);
            }else{
                console.log("OBJ",obj)
                // return  res.send(obj);
                if (!obj.length){
                    console.log("INSIDE !OBJ")
                    // res.send({message:"NO QUESTIONS"})
                    QuestionModel.findOne({_id:new ObjectID(incorrectAnsArr.find(el => true).questionId)},function(err,question){
                        if(err) {
                            return  res.status(500).send(handleError(err));
                        }
                        else {
                            console.log("INSIDE FOUND :", question)
                            if (question){
                             res.send(question);
                            return;
                            }
                            else (!question) 
                            {
                                res.send({message:"NO QUESTIONS"})
                            }
                        }
        
                    });
                } else{
                    
                    return  res.send(obj);
                }
                
            }
        });
  }
 }
});
});