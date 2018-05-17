const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// this first argument 'user' is what we receive from done() in 'GoogleStrategy'
passport.serializeUser((user, done) => {
  // here 'null' represents error object, but as we definitely have user so we cannot receive err there so we put 'null'
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});


passport.use(
  new GoogleStrategy({ 
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if(existingUser) {
          // we already have a record with given profile id
          
          done(null, existingUser);
          
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      })
    
  })
);