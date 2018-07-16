const mongoose = require('mongoose')
const schema = new mongoose.Schema(
{
    companyName : String,
    gameOp : String,
    defaultCoins : Number,
    minBet : Number,
    defaultCorrectFB: String,
    defaultInCorrectFB : String,
    timeLimitForQ: Number,
    lowToMed : Number,
    medToHigh : Number,
    timetToSendToLogin : Number,
    EnableGame : Boolean
  
}
)

module.exports = mongoose.model('settings', schema)
