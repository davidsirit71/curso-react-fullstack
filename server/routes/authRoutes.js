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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);  // esto es simplemente para verificar que se ha logado
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    // res.send(req.session); // esto es solo para probar que contine la sesion
  });


};
