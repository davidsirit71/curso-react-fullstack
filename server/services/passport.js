const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // esto es el Model Class

passport.serializeUser((user, done) => {
  done(null, user.id); // este es el Id que mongoDB crea para la coleccion
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accesToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(exitingUser => {
        if (exitingUser) {
          // we already have a record in DB
          done(null, exitingUser); // todo bien el primer argumento es null
        } else {
          // we don't have a record with this ID,
          new User({
            googleId: profile.id,
            nameTEST: profile.name.familyName
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
