const router = require('express').Router(),
      userHelper = require('../helpers/user'),
      SettingsModel = require('../models/Settings'),
      UserModel = require('../models/User')
      

router.post('/', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    var defaultCoins
    let { email, password } = req.body;
    var userCompany
    UserModel.findOne({email:email},function(err,user){
          if(err) res.status(500).send(handleError(err));
          else {
            //   res.send(question);
            // console.log("USER",user)
            userCompany = user.company
          }
          var defaultCoins , defaultCorrectFB , defaultInCorrectFB , timeLimitForQ, lowToMed, medToHigh,timetToSendToLogin,EnableGame , minBet, gameOp
          SettingsModel.findOne({companyName:userCompany},function(err,settings){
            if(err) res.status(500).send(handleError(err));
            else {
              //   res.send(question);
            //    console.log("SETTINGS",settings)
              defaultCoins = settings.defaultCoins
            //   defaultCorrectFB = settings.defaultCorrectFB
            //   defaultInCorrectFB = settings.defaultInCorrectFB
            //   timeLimitForQ = settings.timeLimitForQ
            //   lowToMed = settings.lowToMed
            //   medToHigh = settings.medToHigh
            //   timetToSendToLogin = settings.timetToSendToLogin
            //   EnableGame = settings.EnableGame
            //   minBet = settings.minBet
            //   gameOp = settings.gameOp
            }
            UserModel.findOneAndUpdate({email: email}, 
              {$set: {coins:defaultCoins}}
              ,function(err,doc){res.status(200)})
                      .then(doc => {
                          if (doc) {
                              console.log("EMAIL",email)
                            //   console.log("DOC", doc)
                            //   res.status(200).json({ message: 'user details were updated successfully' })
                          } else {
                            //   res.status(500).json({ message: 'Bad Request'})
                          }
                      })
                      .catch(err => {
                          console.log(err)
                          res.status(500).json({ message: 'Bad Request'})
                      })
        }); 
  
  
      }); 

         
     
    console.log(email,password);
    if (email && password) {

        userHelper.login(email, password)
            .then(isLoggedIn => {
                res.json({status: isLoggedIn})

            })
    }


})



router.post('/mailExists', (req, res) => {

    userHelper.mailExists(req.body.email)
        .then(exists => {
            res.json({ exists })
        })

})


module.exports = router