const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
require('./models/User'); // el orden de estas sentencias es importante
require('./services/passport');  // const passportConfig = ... no es necesario, en este caso

mongoose.connect(keys.mongoURI);

const app = express(); //express como una funcion

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 dias dura la cookie
        keys: [keys.cookieKey] // encripta cualquier cookie, puden haber mas claves
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // hacer require retorna una funcion que luego llama a la funcion app

const PORT = process.env.PORT || 5000;
app.listen(PORT);
