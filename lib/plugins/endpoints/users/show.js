'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users',
    config: {
      description: 'Display all profiles',
      handler: function(request, reply){
        User.find(function(err, users){
          return reply({users: users});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.profile'
};
