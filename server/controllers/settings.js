const router = require('express').Router(),
    //   settingsHelper = require('../helpers/settings')
    SettingsModel = require('../models/Settings'),
    FullSettingsModel = require('../models/FullSettings')

//////////////////////////////////////////FULL///////////////////////
//create new full settings
router.post('/createNewFullSettings', function (req, res) {
    console.log("INSIDE createNewFullSettings")
    let fullsettings = new FullSettingsModel({
        companyName: req.body.companyName,
        gameOp: req.body.gameOp,
        defaultCoins: req.body.defaultCoins,
        minBet: req.body.minBet,
        defaultCorrectFB: req.body.defaultCorrectFB,
        defaultInCorrectFB: req.body.defaultInCorrectFB,
        timeLimitForQ: req.body.timeLimitForQ,
        lowToMed: req.body.lowToMed,
        medToHigh: req.body.medToHigh,
        timetToSendToLogin: req.body.timetToSendToLogin,
        EnableGame: req.body.EnableGame,
        groups: req.body.groups

    });

    fullsettings.save().then(function(doc) {
        res.status(200).json(doc);
    })
});

router.post('/getFullSttingsByCompany', function (req, res) {
    console.log("getFullSttingsByCompany")
    var companyName = req.body.companyName
    FullSettingsModel.find({companyName: companyName}, function (err, info) {
        if (err) {
            res.status(500).send({message: "Error!"});
        } else {
            res.send(info);
        }
    });
});

//delete full settibgs by company
router.post('/deleteFullSettings', function (req, res) {
    console.log("deleteFullSettings")
    var companyName = req.body.companyName
    FullSettingsModel.findOneAndRemove({companyName: companyName}, function (err, info) {
        if (err) {
            res.status(500).send({message: "Error!"});
        } else {
            res.status(200).send({message: "Deleted"});
        }
    });
});
//updatet full settings
router.put('/updateCompany', function(req, res) {
    console.log("INSIDE UPDATE FULL", req.body)
let {defaultCoins, defaultCorrectFB, defaultInCorrectFB, timeLimitForQ, lowToMed, medToHigh, timetToSendToLogin, EnableGame, minBet, companyName, gameOp} = req.body
// UserModel.update({_id:}, {$set: {name:newname}}, options, function(err,doc){res.status(200)});
// console.log("MINBET",minBet)
let groups = req.body.groups
FullSettingsModel.findOneAndUpdate({companyName: companyName},
    {
        $set: {
            defaultCoins: defaultCoins,
            defaultCorrectFB: defaultCorrectFB,
            defaultInCorrectFB: defaultInCorrectFB,
            timeLimitForQ: timeLimitForQ,
            lowToMed: lowToMed,
            medToHigh: medToHigh,
            timetToSendToLogin: timetToSendToLogin,
            EnableGame: EnableGame,
            minBet: minBet,
            companyName: companyName,
            gameOp: gameOp,
            groups: groups
        }
    }
    , function (err, doc) {
        res.status(200)
    })
    .then(function(doc) {
    if (doc) {
        console.log("SETTING FULL DOC", doc)
        res.status(200).send({message: 'FULL Setting were updated successfully'},doc)
    } else {
        res.status(500).json({message: 'Bad Request'})
}
})
// .catch(err => {
//     console.log(err)
//     res.status(500).json({ message: 'Bad Request'})
// })


})
router.get('/getAllNameCompanies', function (req, res) {
    FullSettingsModel.find({}, function (err, info) {
        if (err) {
            res.status(500).send({message: "Error!"});
        } else {
            var companies = [];
            info.forEach(el => {
                var js = {
                    "companyName": el.companyName,
                    "groups" : el.groups
                }
                companies.push(js)
        })
            res.status(200).send(companies);
            //   console.log(newA)

        }
    });
});

router.get('/getAllCompanies', function (req, res) {
    FullSettingsModel.find({}, function (err, info) {
        if (err) {
            res.status(500).send({message: "Error!"});
        } else {
            res.status(200).send(info);

        }
    });
});

module.exports = router
