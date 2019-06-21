// Here, we will sync our database, create our application, and export this module so that we can use it in the bin directory, where we will be able to establish a server to listen and handle requests and responses;

// Require environmental variables (if we have any) if we are in development or testing;

// if (process.env.NODE_ENV !== 'production') {
//   require('./secrets');
// }

// Module dependencies;
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const session = require('express-session');
const passport = require('passport');
const Sequelize = require('sequelize');
const PORT = process.env.PORT || 5000;


const User = require('./database/models/user.js');

const cors = require('cors');



// Utilities;
const createLocalDatabase = require('./utilities/createLocalDatabase');

// Our database instance;
const db = require('./database');

// Our apiRouter;
const apiRouter = require('./routes/index');

// A helper function to sync our database;
const syncDatabase = () => {
  if (process.env.NODE_ENV === 'production') {
    db.sync();
  }
  else {
    console.log('As a reminder, the forced synchronization option is on');
    db.sync()
      .catch(err => {
        if (err.name === 'SequelizeConnectionError') {
          createLocalDatabase();
        }
        else {
          console.log(err);
        }
      });
  }
};

// Instantiate our express application;
const app = express();
//cors
app.use(cors);


// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  //app.use(helmet());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //app.use(compression());
  // app.use(cookieParser());
  // Session middleware
  app.use(session({
    secret: 'This is not a very secure secret...',
    resave: false,
    saveUninitialized: false
  }));
  // consumes 'req.session' so that passport can know what's on the session
  app.use(passport.initialize());

  // this will invoke our registered 'deserializeUser' method
  // and attempt to put our user on 'req.user'
  app.use(passport.session());
  // after we find or create a user, we 'serialize' our user on the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  let locationOfPublicFolder = path.join(__dirname, "../capstone-2019/", "build");
  app.use(express.static(locationOfPublicFolder));


  // Mount our apiRouter;
  app.use('/api', apiRouter);

  // Error handling;
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    }
    else {
      next();
    }
  });
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../capstone-2019", "public/favicon.ico"));
  });
  // More error handling;
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

// Main function declaration;
const bootApp = async () => {
  await syncDatabase();
  await configureApp();
  await app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
  });

};

// Main function invocation;
bootApp();

// Export our app, so that it can be imported in the www file;
module.exports = app;
