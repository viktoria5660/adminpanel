const mongoose = require('mongoose')
const schema = new mongoose.Schema(
{

    content: String,
    template: Number,
    picture: String,
    difficulty: Number,
    company : String,
    groups:  String,
    category : String,
    answers:[{
        content  : String,
        feedback  : String,
        iscorrect  : Boolean

    }]
}
)

module.exports = mongoose.model('question', schema)
