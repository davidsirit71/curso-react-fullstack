const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // el orden de estas sentencias es importante
require('./services/passport');  // const passportConfig = ... no es necesario, en este caso

mongoose.connect(keys.mongoURI);

const app = express(); //express como una funcion

require('./routes/authRoutes')(app); // hacer require retorna una funcion que luego llama a la funcion app

const PORT = process.env.PORT || 5000;
app.listen(PORT);
