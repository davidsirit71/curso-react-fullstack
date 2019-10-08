const express = require('express');
// const passportConfig = require('./server/services/passport'); // mejor como sigue
require('./services/passport');

const app = express(); //express como una funcion

require('./routes/authRoutes')(app); // hacer require retorna una funcion que luego llama a la funcion app

const PORT = process.env.PORT || 5000;
app.listen(PORT);
