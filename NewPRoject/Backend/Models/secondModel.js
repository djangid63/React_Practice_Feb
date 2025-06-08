const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const secondSchema = new Schema({
  name: String,
}, { timestamps: true })

module.exports = mongoose.model('secondUser', secondSchema)