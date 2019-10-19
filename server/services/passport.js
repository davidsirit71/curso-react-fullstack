const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // esto es el Model Class

passport.serializeUser((user, done) => {
  done(null, user.id); // este es el Id que mongoDB crea para la coleccion
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accesToken, refreshToken, profile, done) => {
      const exitingUser = await User.findOne({ googleId: profile.id });

      if (exitingUser) {
        return done(null, exitingUser); // todo bien el primer argumento es null
      }
      
      const user = await new User({
        googleId: profile.id,
        nameTEST: profile.name.familyName // solo por prueba
      }).save();
      done(null, user);
    }
  )
);
