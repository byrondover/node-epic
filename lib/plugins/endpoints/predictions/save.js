'use strict';

var User = require('../../../models/prediction');
// var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/predictions',
    config: {
      description: 'Update a Prediction',
      // validate: {
      //   payload: {
      //     name: Joi.string().required(),
      //     username: Joi.string().required(),
      //     email: Joi.string().email().required(),
      //     avatar: Joi.string().uri().required(),
      //     photo: Joi.string()
      //   }
      },
      handler: function(request, reply){
        console.log(request.payload);
        var prediction = new Prediction(request.payload);
        prediction.save(saveCb);
        function saveCb(err, user){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(prediction);
          }
        }
      }
    }
  );

  return next();
};

exports.register.attributes = {
  name: 'predictions.update'
};
