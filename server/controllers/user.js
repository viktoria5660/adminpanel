const router = require('express').Router(),
      UserModel = require('../models/User'), FullSettingsModel = require('../models/FullSettings'),
      ReportModel = require('../models/Report'),QuestionModel = require('../models/Question')


      //api {email:,bet:,isCorrect:,qid:}
      router.put('/update', function(req, res) {
        let email = req.body.email,
            bet = req.body.bet,
            isCorrect = req.body.isCorrect,
            qid = req.body.qid
            reports (email, bet, isCorrect,qid);
                console.log("INSIDE UPDATE", req.body)
              UserModel.findOne(  
              // query
              {email:email},
              // callback function
                  function(err, user) {
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
        let user = new UserModel({
            coins : req.body.coins,
            difficulty : req.body.difficulty,
            email : req.body.email,
            group : req.body.group,
            company : req.body.company,
            lastName : req.body.lastName,
            name : req.body.name,
            password : req.body.password,
            isAdmin: req.body.isAdmin
        });
        
        user.save()
            .then(function(doc) {
                res.status(200).json(doc)
            })
        });


        ////////////////create report/////////////
        // router.post('/CreateReportUser',function(req,res){
          function reports (email, bet, isCorrect,qid)
            {   
                UserModel.findOne({email : email }, function(err,info){
                    if(err) {
                      res.status(500).send({message:"Error!"});
                    } else {
                         let company = info.company
                         let name = info.name   
                        console.log("INSIDE FIND", company,name)
                        QuestionModel.find({id : qid }, function(err,question){
                            if(err) {
                              res.status(500).send({message:"Error!"});
                            } else {
                                var content = question.content
                                let report = new ReportModel({
                                    name: name, 
                                    email:email,
                                    company: company,
                                    bet:bet,
                                    isCorrect: isCorrect,
                                    qid: qid,
                                    qContent: content
                                });
                                
                                report.save()
                                    .then(function(doc) {
                                        console.log("SAVED",doc)
                                        // res.status(200).json(doc)
                                    })   
                            }
                        });

                    //   res.send(info);
                  
                    }
                });

                // 
                
            }
            // });

            //get all reports
            router.get('/Reports',function(req,res,next){
                ReportModel.find({}, function(err,report){
                    if(err) {
                      res.status(500).send({message:"Error!"});
                    } else {
                      res.send(report);
                    }
                });
            });
            //get report by email
            router.get('/Reports/report/:email',function(req,res,next){
                email = req.params.email
                console.log("INSIDE PARAM", email)
                ReportModel.find({email : email}, function(err,report){
                    if(err) {
                      res.status(500).send({message:"Error!"});
                    } else {
                      res.send(report);
                    }
                });
            });
            


        router.put('/updateuserfromadmin', function(req, res) {
            let { coins , company, difficulty,group, lastName, name, email, isAdmin} = req.body
            // UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
            // console.log("MINBET",minBet)
            UserModel.findOneAndUpdate({email : email}, 
            {$set: {coins : coins , company : company, difficulty : difficulty ,group : group, lastName : lastName, name : name , isAdmin: isAdmin}}
            ,function(err,doc){res.status(200)})
                    .then(function(doc) {
                        if (doc) {
                            // console.log("SETTING DOC", doc)
                            res.status(200).json({ message: 'user were updated successfully' })
                        } else {
                            res.status(500).json({ message: 'Bad Request'})
                        }
                    }).catch(function(err) {
                        console.log(err);
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

    
        router.post('/login', (req, res) => {

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.setHeader('Access-Control-Allow-Credentials', true); // If needed
            console.log("LOGIN", req.body)
            let { email, password } = req.body;
            
            let exists
           
           UserModel.find({email : email }, function(err,info){
            if(err) {
              res.status(500).send({message:"Error!"});
            } else {
                console.log("email", info)
                if (info.length > 0)
                {
                    exists = 1
                }
                else if (!info.length)
                {
                    exists = 2
                }
            }
            console.log("EXISTS",exists)
            switch(exists) {
                case 1:{
                UserModel.findOne({ email : email })
                               .then(user => {
                                   console.log(email)
                                   user.comparePassword(password, (err, match) => {
                                       console.log("MATCH",match)
                                    //    resolve(match)
                                    res.status(200).send({message:match});
                                   })
                               })
                    break;
                }
                case 2:
                {
                res.status(404).send({message:"User Not Found!"});
                    break;
                }
            }
        });
        });


        router.post('/getUserSettings',function(req,res,next){
            var email = req.body.email
            var company
            UserModel.findOne({email: email }, function(err,info){
                if(err) {
                  res.status(500).send({message:"Error!"});
                } else {
                    // console.log("INFO",info)
                    
                    if (info)
                    {   
                        console.log("INSIDE IF")
                        company = info.company;
                        FullSettingsModel.find({companyName : company }, function(err,set){
                                if(err) {
                                  res.status(500).send({message:"Error!"});
                                } else {
                                    console.log(set)
                                  res.send(set);
                                }
                            });
                    }
                }
                
            });
            
            // FullSettingsModel.find({companyName : company }, function(err,info){
            //     if(err) {
            //       res.status(500).send({message:"Error!"});
            //     } else {
            //       res.send(info);
            //     }
            // });
        });
  
    module.exports = router
