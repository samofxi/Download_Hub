const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: Array,
  FileName: Array,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);
