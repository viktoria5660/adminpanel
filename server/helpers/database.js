const mongoose = require('mongoose'),
      dotenv = require('dotenv').config()


class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_URL}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`)
      .then(() => {
        console.log('inside DB')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = new Database()