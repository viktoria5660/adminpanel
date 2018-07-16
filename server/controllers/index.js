const router    = require('express').Router()
      question  = require('./question'),
      answer    = require('./answer'),
      register  = require('./register'),
      company   = require ('./company'),
      settings  = require ('./settings'),
      user      = require ('./user'),
      login     = require('./login')
      //real path

router.use('/question', question)
router.use('/answer', answer)
router.use('/register', register)
router.use('/login', login)
router.use('/company', company)
router.use('/settings', settings)
router.use ('/users', user)
//real route


module.exports = router