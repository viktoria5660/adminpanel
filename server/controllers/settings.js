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

router.post('/getSttingsByCompany',function(req,res){
    console.log("getSttingsByCompany")
    var companyName = req.body.companyName
    SettingsModel.find({companyName : companyName }, function(err,info){
        if(err) {
          res.status(500).send({message:"Error!"});
        } else {
          res.send(info);
        }
    });
});

//create new settings
router.post('/createNewSettings',function(req,res){
console.log("INSIDE CREATING SETTINGS")

let settings = new SettingsModel({
            companyName : req.body.companyName,
            gameOp : req.body.gameOp,
            defaultCoins : req.body.defaultCoins,
            minBet : req.body.minBet,
            defaultCorrectFB : req.body.defaultCorrectFB,
            defaultInCorrectFB : req.body.defaultInCorrectFB,
            timeLimitForQ : req.body.timeLimitForQ,
            lowToMed : req.body.lowToMed,
            medToHigh : req.body.medToHigh,
            timetToSendToLogin : req.body.timetToSendToLogin,
            EnableGame : req.body.EnableGame
})

settings.save()
    .then(doc => {
        console.log(doc)
        res.status(200).json({ message: 'Settings created'})
    })
});
//delete by company
router.post('/deleteSettings',function(req,res){
    console.log("deleteSttings")
    var companyName = req.body.companyName
    SettingsModel.findOneAndRemove({companyName: companyName }, function(err,info){
        if(err) {
          res.status(500).send({message:"Error!"});
        } else {
            res.status(200).send({message:"Deleted"});
        }
    });
});


module.exports = router