const router = require('express').Router(),
      UserModel = require('../models/User')

      //api {email:,bet:,isCorrect:,qid:}
      router.put('/update', (req, res) => {
        let email = req.body.email,
            bet = req.body.bet,
            isCorrect = req.body.isCorrect,
            qid = req.body.qid
      
              UserModel.findOne(  
              // query
              {email:email},
              // callback function
              (err, user) => {
                if (err) return res.status(304).send(err)
                user.incorrectAns.forEach(el => el.numberOfTurns++);
                if (isCorrect)
                {
                  console.log("Updaing user..");
                  user.correctAns.push (qid); //is it correct?
                  user.coins = user.coins + (2 * bet);
                  user.countOfcorrectAns ++;
                    //if the answer was in incorrectarr delete it
                  user.incorrectAns.splice(user.incorrectAns.findIndex(el => el.questionId == qid), 1);
                       
                }
                else 
                {
                  let incorrectAnsIndex = user.incorrectAns.findIndex(el => el.questionId == qid);
                  console.log(incorrectAnsIndex);
                  if(incorrectAnsIndex != -1){
                    //The question exist
                    user.incorrectAns[incorrectAnsIndex].attempts = 2;             
                } else  user.incorrectAns.push({questionId:qid, attempts:1,numberOfTurns:0});
                }
                UserModel.findOneAndUpdate({email:email}, 
                {$set: {coins:user.coins,correctAns : user.correctAns,countOfcorrectAns : user.countOfcorrectAns, incorrectAns : user.incorrectAns, difficulty: user.difficulty  }}
                ,function(err,doc){res.status(200)})
                        .then(doc => {
                            if (doc) {
                                res.status(200).json({ message: 'user details were updated successfully' })
                            } else {
                                res.status(500).json({ message: 'Bad Request'})
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(500).json({ message: 'Bad Request'})
                        })  
              }
              );
       
        // UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
 
        
    
    })

    router.get('/',function(req,res,next){
        UserModel.find({}, function(err,users){
            if(err) {
              res.status(500).send({message:"Error!"});
            } else {
              res.send(users);
            }
        });
    });

    router.post('/alluserInfo',function(req,res,next){
        var email = req.body.email
        UserModel.find({email : email }, function(err,info){
            if(err) {
              res.status(500).send({message:"Error!"});
            } else {
              res.send(info);
            }
        });
    });
    

  
    module.exports = router
      