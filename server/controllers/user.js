const router = require('express').Router(),
      UserModel = require('../models/User')

      //api {email:,bet:,isCorrect:,qid:}
      router.put('/update', (req, res) => {
        let email = req.body.email,
            bet = req.body.bet,
            isCorrect = req.body.isCorrect,
            qid = req.body.qid
                console.log("INSIDE UPDATE", req.body)
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
                else (!isCorrect)
                {
                    user.coins = user.coins - ( bet / 2);
                  let incorrectAnsIndex = user.incorrectAns.findIndex(el => el.questionId == qid);
                //   console.log(incorrectAnsIndex);
                  if(incorrectAnsIndex != -1){
                    //The question exist
                    user.incorrectAns[incorrectAnsIndex].attempts = 2;             
                } else 
                {
                    user.incorrectAns.push({questionId:qid, attempts:1,numberOfTurns:0});
                } 
                
                }
                if (user.countOfcorrectAns > 8)
                {
                    console.log("COUNT8", user.countOfcorrectAns)
                       user.difficulty =  2;
                }
                else 
                {if(user.countOfcorrectAns > 16)
                {   
                    console.log("COUNT16", user.countOfcorrectAns)
                    user.difficulty =  3; 
                }}
                UserModel.findOneAndUpdate({email:email}, 
                {$set: {coins:user.coins,correctAns : user.correctAns,countOfcorrectAns : user.countOfcorrectAns, incorrectAns : user.incorrectAns, difficulty: user.difficulty  }}
                ,function(err,doc){res.status(200)})
                        .then(doc => {
                            if (doc) {
                                var status = true
                                res.status(200).json({ message: 'user details were updated successfully', status })
                            } else {
                                status = false
                                res.status(500).json({ message: 'Bad Request', status})
                            }
                        })
                        .catch(err => {
                            // console.log(err)
                            res.status(500).json({ message: 'Bad Request'})
                        })  
              }
              );
       
        // UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
 
        
    
    })
    //get all users
    router.get('/',function(req,res,next){
        UserModel.find({}, function(err,users){
            if(err) {
              res.status(500).send({message:"Error!"});
            } else {
              res.send(users);
            }
        });
    });
    //get all user info by email
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
    //get all users by company
    router.post('/company',function(req,res,next){
        var company = req.body.company
        UserModel.find({company : company }, function(err,info){
            if(err) {
              res.status(500).send({message:"Error!"});
            } else {
                console.log("COMPANY", info)
              res.send(info);
            }
        });
    });
    
    router.post('/createNewUser',function(req,res){
        // console.log("INSIDE CREATING USER", req)
        
        let user = new UserModel({
            coins : req.body.coins,
            difficulty : req.body.difficulty,
            email : req.body.email,
            group : req.body.group,
            company : req.body.company,
            lastName : req.body.lastName,
            name : req.body.name,
            password : req.body.password
        })
        
        user.save()
            .then(doc => {
                console.log(doc)
                res.status(200).json({ message: 'User created'})
            })
        });


        router.put('/updateuserfromadmin', (req, res) => {
            let { coins , company, difficulty,group, lastName, name, email } = req.body
            // UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
            // console.log("MINBET",minBet)
            UserModel.findOneAndUpdate({email : email}, 
            {$set: {coins : coins , company : company, difficulty : difficulty ,group : group, lastName : lastName, name : name }}
            ,function(err,doc){res.status(200)})
                    .then(doc => {
                        if (doc) {
                            // console.log("SETTING DOC", doc)
                            res.status(200).json({ message: 'user were updated successfully' })
                        } else {
                            res.status(500).json({ message: 'Bad Request'})
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ message: 'Bad Request'})
                    })
            
        
        })

        router.post('/deleteUser',function(req,res){
            console.log("deleteUser")
            var email = req.body.email
            UserModel.findOneAndRemove({email: email }, function(err,info){
                if(err) {
                  res.status(500).send({message:"Error!"});
                } else {
                    res.status(200).send({message:"Deleted"});
                }
            });
        });


  
    module.exports = router
      