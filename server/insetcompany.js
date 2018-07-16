const db = require('./helpers/database')
const CompanyModel = require('./models/Company')


let company = new CompanyModel({
    companyid : 2,
    companyName: "dell",
    gruops:[{
        name  : "front"
    },
    {
        name  : "back"
    },
    {
        name  : "both"
    }
    ]
})

company.save()
    .then(doc => {
        console.log(doc)
    })