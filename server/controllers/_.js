
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
    }else {
        console.log("NOTHING IN INCORRECT ANSWER")
        res.status(404).send(incorrectAnsArr)
        return;
    }
    
    if(!found){
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
                    //   console.log(err);
                }else{
                    // console.log(obj)
                    // return  res.send(obj);
                    if (!obj.length){
                        QuestionModel.findOne({_id:new ObjectID(incorrectAnsArr.find(el => true).questionId)},function(err,question){
                            if(err) {
                                return  res.status(500).send(handleError(err));
                            }
                            else {
                                console.log("INSIDE FOUND :", question)
                                //  res.send(question);
                                return;
                            }
            
                        });
                        console.log("OBJ")
                    } else{
                        return  res.send(obj);
                    }
                    
                }
                // console.log("RANDOM QUESTION:",obj)
                // var test = obj
                // console.log("TEST:", test)
                // res.send(obj);
            });
        }
    
    });
});

router.post('/enterQ', (req, res) => {
    let { content, template, picture, difficulty, groups,answers, company } = req.body

    if (content && template && picture && difficulty && groups && answers&& company) {

        QuestionHelper.enterQ(content , template, picture ,difficulty, groups,answers, company)
            .then(doc => {
                if (doc) {
                   return res.json(doc)
                } else {
                    return res.status(500).json({ message: 'Bad Request'})
                }
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({ message: 'Bad Request'})
            })
    }

})

router.get('/getQuestionsByCompany/:conpamyName',function(req,res){
    // console.log("INSIDE ALLQ")
     var conpamyName = req.params.conpamyName

    QuestionModel.find({company :conpamyName }, function(err,questions){
        if(err) {
          res.status(500).send({message:"Error!"});
        } else {
          res.send(questions);
        }
    });
});

router.post('/deleteQ', (req, res) => {
   let Qid = req.body._id

        QuestionModel.findByIdAndRemove({_id : Qid})
            .then(doc => {
                if (doc) {
                   return res.status(200).json({message: 'question deleted'})
                } else {
                    return res.status(500).json({ message: 'Bad Request'})
                }
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({ message: 'Bad Request'})
            })
  

})

router.put('/updateQ', (req, res) => {
    // console.log("INSIDE UPDATEQ")
    let id = req.body._id
    let {content , template, picture, difficulty , company, groups} = req.body
    let answers = req.body.answers

    QuestionModel.findOneAndUpdate({_id: id}, 
    {$set: { content : content , template : template , picture : picture, difficulty : difficulty,
        company : company, groups: groups, answers : answers }}
    ,function(err,doc){res.status(200)})
            .then(doc => {
                if (doc) {
                    // console.log("SETTING DOC", doc)
                    res.status(200).json({ message: 'Question was updated successfully' })
                } else {
                    res.status(500).json({ message: 'Question did not updated'})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Bad Request'})
            })
    

})


var handleError = (err) => {
   return ({message:'Error while trying to execute query!' + ' ' + err});
}


module.exports = router