# f1-index Back End

**See Also:** [f1-index AngularJS front end](https://github.com/Edsdover/angular-epic).

## Setup

### Install prerequisites.

```
> brew install npm
> npm -g install bower gulp
```

### Clone repository.

```
> git clone https://github.com/Edsdover/node-epic.git
```

### Setup local environment.

You can sign up for a Firebase account for free [here](https://www.firebase.com).

```
> cd node-epic
> npm install
> export FIREBASE_TOKEN=<firebase_token>
> export FIREBASE_SECRET=<firebase_secret>
```

### Install and run local MongoDB server.

```
> brew install mongodb
> mkdir /tmp/mongo
> mongod --config mongo.conf
```

### Launch Node.js server.

```
> npm start

 f1-index@0.0.1 start node-epic
 node index.js

http://localhost:8000
  PUT    /predictions                   Update a Prediction
  GET    /predictions/{username}        Display predictions
  GET    /users                         Display all profiles
  PUT    /users                         Update a user
  GET    /users/{userId}                Display a user profile
  GET    /version                       Get the app version
--------------------------------------------------------------------------------
Hapi:
 http://localhost:8000
Environment:
 { PORT: 8000,
  MONGO_URL: 'mongodb://localhost/f1-index-dev',
  NODE_ENV: 'development',
  FIREBASE_SECRET: '<firebase_secret>',
  FIREBASE_EXPIRE: 24 }
--------------------------------------------------------------------------------
```
