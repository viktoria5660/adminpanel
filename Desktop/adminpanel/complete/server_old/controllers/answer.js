const router = require('express').Router(),
      questionHelper = require('../helpers/question')


router.post('/', (req, res) => {
    let { questionId, answerId } = req.body

    if ( questionId && answerId) {

         questionHelper.validateAnswer(questionId, answerId)
             .then(isCorrect => {
                 res.json({ isCorrect })
             })
         } else {
             res.status(500).json({ message: 'Fail to find answer' })
         }
})

module.exports = router