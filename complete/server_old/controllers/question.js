const router = require('express').Router(),
      QuestionModel = require('../models/Question'),
      QuestionHelper = require('../helpers/question'),
      UserModel = require('../models/User'),
    //   SettingsModel = require('../models/Settings'),
     ObjectID = require('mongodb').ObjectID;

 
router.get('/:id', (req, res) => {
 ////////////////////////////////////////
    var questions;
    var userEmail = req.params.id;

    //Getting the user details from MongoDB
    UserModel.findOne({email: userEmail}, function(err, user){
       if(err || !user){
           res.status(500).send({message:"DB Error or the user does not exist!"});
       } 
       console.log("USER FOUND BY EMAIL:",user);
    //    var userNumberOfTurns = user.numberOfTurns;
       var incorrectAnsArr = user.incorrectAns;
    //    console.log ("ARRAY: ",incorrectAnsArr);
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
                if(err) res.status(500).send(handleError(err));
                else {
                    res.send(question);
                }
            }); 
        }
       
       
    }
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
                console.log("RANDOM QUESTION:",obj)
            res.send(obj);
            });
    
    });
});

router.post('/enterQ', (req, res) => {
    let { content, template, picture, difficulty, groups,answers, company } = req.body

    if (content && template && picture && difficulty && groups && answers&& company) {

        QuestionHelper.enterQ(content , template, picture ,difficulty, groups,answers, company)
            .then(doc => {
                if (doc) {
                    res.json(doc)
                } else {
                    res.status(500).json({ message: 'Bad Request'})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Bad Request'})
            })
    }

})



var handleError = (err) => {
   return ({message:'Error while trying to execute query!' + ' ' + err});
}


module.exports = router