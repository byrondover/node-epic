'use strict';

var Mongoose = require('mongoose');

var predictionSchema = Mongoose.Schema({
  constructorFirstPlace: {type: Object, required: true},
  driverFirstPlace: {type: Object, required: true},
  driverSecondPlace: {type: Object, required: true},
  driverThirdPlace: {type: Object, required: true},
  driverlapTime: {type: Object},
  pollPosition: {type: Object, required: true},
  disqualifications: {type: Number, required: true},
  lapTime: {type: Number, required: true},
  pitStop: {type: Number, required: true},
  raceName: {type: String, required: true},
  username: {type: String, required: true}
});

var Prediction = Mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;
