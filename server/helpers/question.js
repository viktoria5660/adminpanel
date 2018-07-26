const QuestionModel = require('../models/Question')
          
            module.exports = {
                //add all counter to 0 
                async enterQ (content ,difficulty, groups,answers,company) {
                    let Q = new QuestionModel({
                        content ,
                        difficulty,
                        groups,
                        company,
                        answers
                    })
            
                    try {
            
                        await Q.save()
                    } catch (err) {
            
                        console.log(err)
                        return err
                    }
            
                    return Q
                }
            }
