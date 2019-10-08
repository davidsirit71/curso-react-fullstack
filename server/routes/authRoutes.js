//passport sabe internamente que 'google' se refiere a la estrategia que se configura
const passport = require('passport');

module.exports = app => {

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
        );
        
        app.get('/auth/google/callback', passport.authenticate('google'));
    };