const mongoose = require('mongoose')
const schema = new mongoose.Schema(
{
    companyid : Number,
    companyName: String,
    gruops:[{
        name  : String
    }]
}
)

module.exports = mongoose.model('company', schema)
