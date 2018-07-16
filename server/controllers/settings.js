const router = require('express').Router(),
    //   settingsHelper = require('../helpers/settings')
    SettingsModel = require('../models/Settings')


router.put('/', (req, res) => {
    let { defaultCoins, defaultCorrectFB, defaultInCorrectFB, timeLimitForQ, lowToMed, medToHigh, timetToSendToLogin,EnableGame, minBet, companyName, gameOp } = req.body
    // UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
    // console.log("MINBET",minBet)
    SettingsModel.findOneAndUpdate({companyName: companyName}, 
    {$set: {defaultCoins:defaultCoins,defaultCorrectFB : defaultCorrectFB, defaultInCorrectFB: defaultInCorrectFB, timeLimitForQ: timeLimitForQ,lowToMed: lowToMed, medToHigh: medToHigh, timetToSendToLogin : timetToSendToLogin, EnableGame : EnableGame, minBet: minBet, companyName : companyName, gameOp : gameOp }}
    ,function(err,doc){res.status(200)})
            .then(doc => {
                if (doc) {
                    // console.log("SETTING DOC", doc)
                    res.status(200).json({ message: 'Setting were updated successfully' })
                } else {
                    res.status(500).json({ message: 'Bad Request'})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Bad Request'})
            })
    

})

// router.get('/getSettings',function(req,res,next){
//     SettingsModel.find({_id: '5b3f9398a2a83633c4f97bc5'}, function(err,settings){
//         if(err) {
//           res.status(500).send({message:"Error!"});
//         } else {
//           res.send(settings);
//         }
//     });
// });

router.post('/getSttingsByCompany',function(req,res,next){
    // console.log("getSttingsByCompany")
    var companyName = req.body.companyName
    SettingsModel.find({companyName : companyName }, function(err,info){
        if(err) {
          res.status(500).send({message:"Error!"});
        } else {
          res.send(info);
        }
    });
});

router.post('/createNewSettings',function(req,res,next){
    console.log("creating")
    var  companyName = req.body.companyName
        var  gameOp = req.body.gameOp
        //   defaultCoins,
        //   minBet,
        //   defaultCorrectFB,
        //   defaultInCorrectFB,
        //   timeLimitForQ,
        //   lowToMed,
        //   medToHigh,
        //   timetToSendToLogin,
        //   EnableGame
        // }
        
        let  settings = new SettingsModel 
        ({ companyName ,
            gameOp
            // defaultCoins = defaultCoins,
            // minBet = minBet,
            // defaultCorrectFB = defaultCorrectFB,
            // defaultInCorrectFB = defaultInCorrectFB,
            // timeLimitForQ = timeLimitForQ,
            // lowToMed = lowToMed,
            // medToHigh = medToHigh,
            // timetToSendToLogin = timetToSendToLogin,
            // EnableGame = EnableGame
          })
  
          try {
            console.log("aaaaaaaaaaaa:",companyName)
             settings.save()
        } catch (err) {

            console.log(err)
            return err
        }

        return settings
});


module.exports = router
