const mongoose = require('mongoose')
const schema = new mongoose.Schema(
{
    
    companyName: String,
    gameOp : String,
    defaultCoins : Number,
    minBet : Number,
    defaultCorrectFB: String,
    defaultInCorrectFB : String,
    timeLimitForQ: Number,
    lowToMed : Number,
    medToHigh : Number,
    timetToSendToLogin : Number,
    EnableGame : Boolean,
    groups:[{
        name  : String
    }]
}
)

module.exports = mongoose.model('fullsettings', schema)