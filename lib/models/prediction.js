'use strict';

var Mongoose = require('mongoose');

var predictionSchema = Mongoose.Schema({
  constructorFirstPlace: {type: String, required: true},
  driverFirstPlace: {type: String, required: true},
  driverSecondPlace: {type: String, required: true},
  driverThirdPlace: {type: String, required: true},
  driverlapTime: {type: Number},
  pollPosition: {type: Number, required: true},
  disqualifications: {type: Number, required: true},
  lapTime: {type: Number, required: true},
  pitStop: {type: Number, required: true},
  raceName: {type: String, required: true},
  username: {type: String, required: true}
});

var Prediction = Mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;
