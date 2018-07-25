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
})

// ensure virtual fields are serialised
schema.set('toJSON', {
    getters: true,
    virtuals: true
});


// remove the _id of every document before returning the result
schema.options.toJSON.transform = function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
}

module.exports = mongoose.model('question', schema)
