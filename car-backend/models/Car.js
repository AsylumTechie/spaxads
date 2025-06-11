const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carNumber: {
    type: String,
    required: true,
    unique: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  engineType: {
    type: String,
    required: true,
  },
  manufacturingYear: {
    type: Number,
    required: true,
  },
  desiredSellingDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Car', carSchema);
