const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  file: {
    type: String
  }
})

module.exports = mongoose.model('newUserData', userModel)