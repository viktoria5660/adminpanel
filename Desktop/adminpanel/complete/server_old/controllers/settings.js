const router = require('express').Router(),
    //   settingsHelper = require('../helpers/settings')
    SettingsModel = require('../models/Settings')


router.put('/', (req, res) => {
    let { defaultCoins, defaultCorrectFB, defaultInCorrectFB, timeLimitForQ, lowToMed, medToHigh, timetToSendToLogin,EnableGame } = req.body
    // UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
    SettingsModel.findOneAndUpdate({_id: '5b3f9398a2a83633c4f97bc5'}, 
    {$set: {defaultCoins:defaultCoins,defaultCorrectFB : defaultCorrectFB, defaultInCorrectFB: defaultInCorrectFB, timeLimitForQ: timeLimitForQ,lowToMed: lowToMed, medToHigh: medToHigh, timetToSendToLogin : timetToSendToLogin, EnableGame : EnableGame }}
    ,function(err,doc){res.status(200)})
            .then(doc => {
                if (doc) {
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

module.exports = router