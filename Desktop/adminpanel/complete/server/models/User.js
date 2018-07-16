const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt'),
      ObjectId = require('mongoose').ObjectId,
      SALT_WORK_FACTOR = 10

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true }, 
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        group: { type: String, required: true }, // TODO: fix to objectid
        company: { type: String },
        password: { type: String, required: true },
        correctAns : { type : Array },
        countOfcorrectAns : {type: Number, defult : '0'},
        incorrectAns : { type : Array },
        difficulty: {type: Number, defult : '1'},
        isAdmin : {type: Boolean},
        coins : {type : Number},
        accessToken: { type: String } 
    },
    { 
        timestamps: { createdAt: 'created_at' }
    }
)

schema.pre('save', function (next) {
    let user = this

    if (!user.isModified('password')) return next()

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

schema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}
module.exports = mongoose.model('user', schema)
