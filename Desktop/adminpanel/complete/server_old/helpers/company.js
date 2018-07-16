const CompanyModel = require('../models/Company')
          //  shuffle = require('shuffle-array')
module.exports = {

    // async getgroups (company = 1) {

    //     let groups

    //     try {

    //         groups = await CompanyModel.findOne(
    //             {
    //                 companyid : company}, function(err, obj) {
    //                     console.log("answer from find: ",obj);
    //                         //  res.json(obj);
                       
    //             }
    //         )
            
    //     } catch (err) {
    //         console.log('in err')

    //     }
    //     // console.log(questions);

    //     return groups
    // }
    async getgroups (company) {
    let groups
        try {
            groups = await CompanyModel.findOne({ companyid : company})
        } catch (err) {
            console.log(err)
        }
        console.log("groups by company",groups)
        return groups
    
}
}
