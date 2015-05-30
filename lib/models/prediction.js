'use strict';

var Mongoose = require('mongoose');

var predictionSchema = Mongoose.Schema({
  constructorFirstPlace: {type: Object, required: true},
  constructorSecondPlace: {type: Object},
  constructorThirdPlace: {type: Object},
  driverFirstPlace: {type: Object, required: true},
  driverSecondPlace: {type: Object, required: true},
  driverThirdPlace: {type: Object, required: true},
  driverLapTime: {type: Object},
  pollPosition: {type: Object},
  disqualifications: {type: Number},
  totalRetirements: {type: Number},
  topPoll: {type: Number},
  lapTime: {type: Number},
  pitStop: {type: Number},
  raceName: {type: String},
  currentSeason: {type: String},
  username: {type: String, required: true}
});

var Prediction = Mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;
