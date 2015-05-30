'use strict';

var Prediction = require('../../../models/prediction');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/predictions/{username}',
    config: {
      description: 'Display predictions',
      handler: function(request, reply){
        Prediction.find(function(err, predictions){
          return reply({predictions: predictions});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'predictions.find'
};
