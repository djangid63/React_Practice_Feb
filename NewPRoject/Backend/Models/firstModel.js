const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const firstSchema = new Schema({
  name: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('firstUser', firstSchema)