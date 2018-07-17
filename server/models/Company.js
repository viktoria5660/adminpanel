const mongoose = require('mongoose')
const schema = new mongoose.Schema(
{
    settings:{type:mongoose.Schema.Types.ObjectId, ref:'settings'},
    companyName: String,
    groups:[{
        name  : String
    }]
}
)

module.exports = mongoose.model('company', schema)
