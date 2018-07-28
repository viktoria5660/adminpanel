const mongoose = require('mongoose')
   

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true }, 
        email: { type: String, required: true},
        company: { type: String },
        bet : {type: Number},
        isCorrect : {type : Boolean},
        qid : { type : String },
        qContent : {type : String}
        }
)


module.exports = mongoose.model('report', schema);
