const router = require('express').Router(),
      companyHelper = require('../helpers/company')


// router.get('/', (req, res) => {
//     companyHelper.getgroups()
//         .then(groups => {
//             res.json(groups)
//         })
// })
router.post('/', (req, res) => {
    let company = req.body.companyid

    if ( company) {
            console.log("company number:", company)
        companyHelper.getgroups(company)
             .then(groups => {
                 res.json({ groups })
             })
         } else {
             res.status(500).json({ message: 'no matching company' })
         }
})


module.exports = router