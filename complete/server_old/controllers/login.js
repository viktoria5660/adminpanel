const router = require('express').Router(),
      userHelper = require('../helpers/user')

router.post('/', (req, res) => {

    
    let { email, password } = req.body
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