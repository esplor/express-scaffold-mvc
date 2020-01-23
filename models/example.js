const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  weeksOld: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Example', exampleSchema);
