'use strict';

exports.get = function(){
  var env = process.env.NODE_ENV || 'development';

  var common = {
    NODE_ENV: env,
    FIREBASE_SECRET: process.env.FIREBASE_SECRET,
    FIREBASE_EXPIRE: 24
  };

  var environments = {
    development: {
      PORT: process.env.PORT || 8000,
      MONGO_URL: 'mongodb://localhost/f1-index-dev'
    },
    test: {
      PORT: process.env.PORT || 0,
      MONGO_URL: 'mongodb://localhost/f1-index-test',
      FIREBASE_EXPIRE: Infinity,
      FIREBASE_TOKEN: process.env.FIREBASE_TOKEN
    },
    production: {
      PORT: process.env.PORT || 0,
      MONGO_URL:'mongodb://heroku_app37497241:869jbv85t9si78dot77dpvpqk4@ds043262.mongolab.com:43262/heroku_app37497241'
    }
  };

  var environment = environments[env];

  Object.keys(common).forEach(function(key){
    if(!environment[key]){
      environment[key] = common[key];
    }
  });

  return environment;
};
