const router = require('express').Router(),
companyHelper = require('../helpers/company'),
companyModel = require("../models/Company")

router.post('/create',(req,res) => {
    var newCompany = new companyModel({settings:req.body.settings,groups:req.body.groups,companyName:req.body.companyName});
    newCompany.save(function(err){
        if(err){
            console.log(err);
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