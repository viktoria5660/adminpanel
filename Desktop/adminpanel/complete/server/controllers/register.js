const router = require('express').Router(),
      userHelper = require('../helpers/user')
    //   SettingsModel = require('../models/Settings')

    //   var defaultCoins
    //   SettingsModel.findOne({_id:'5b3f9398a2a83633c4f97bc5'},function(err,settings){
    //       if(err) res.status(500).send(handleError(err));
    //       else {
    //         //   res.send(question);
    //         // console.log("COINS",settings)
    //         defaultCoins = settings.defaultCoins
    //       }
    //   }); 
// console.log("defaultCOINS:",defaultCoins )
router.post('/', (req, res) => {
    let correctAns =[] ,
        countOfcorrectAns = 0,
        incorrectAns = [],
        difficulty = 1,
        isAdmin = false,
        coins = 0
        // console.log("COINS",defaultCoins )
        // let correctAns =[] ,incorrectAns = [], countOfcorrectAns =0
    let { name, lastName, email, group, password, company } = req.body
    // console.log("COMPANY:", company)
    if (name && lastName && email && group && password && company) {

        userHelper.register(name, lastName, email, group, password, company, correctAns,incorrectAns,countOfcorrectAns,difficulty,isAdmin,coins)
            .then(doc => {
                if (doc) {
                    res.json(doc)
                    console.log("DOC:",doc)
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

module.exports = router