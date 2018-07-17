const router = require('express').Router(),
companyHelper = require('../helpers/company'),
companyModel = require("../models/Company")


// router.get('/', (req, res) => {
//     companyHelper.getgroups()
//         .then(groups => {
//             res.json(groups)
//         })
// })
// router.post('/', (req, res) => {
//     let company = req.body.companyid

//     if ( company) {
//             console.log("company number:", company)
//         companyHelper.getgroups(company)
//              .then(groups => {
//                  res.json({ groups })
//              })
//          } else {
//              res.status(500).json({ message: 'no matching company' })
//          }
// })

router.post('/create',(req,res) => {
    var newCompany = new companyModel({settings:req.body.settings,groups:req.body.groups,companyName:req.body.companyName});
    newCompany.save(function(err){
        if(err){
            return res.status(500).send({error:"Error"});
        } else {
            return res.send({message:"Company Added"});
        }
    });

});


router.get('/', (req,res) => {
    companyModel.find({}).populate('settings').exec(function(err, companies){
        if(err){
            console.log(err);
            res.status(500).send({error:"Error! Can't get Companies."});
        } else {
            res.send(companies);
        }
    })
})


module.exports = router