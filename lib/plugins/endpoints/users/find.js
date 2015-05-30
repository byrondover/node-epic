'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users/{userId}',
    config: {
      description: 'Display a user profile',
      handler: function(request, reply){
        console.log('some bullshit', request.params);
        User.findOne({firebaseId: request.params.userId}, function(err, user){
          console.log(err);
          return reply({user: user});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.viewProfile'
};
