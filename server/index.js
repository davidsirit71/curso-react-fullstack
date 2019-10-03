const express = require('express');
const app = express();   //llamado de express como una funcion

app.get('/', (req, res) =>{
    res.send({hi: 'there' });
});

app.listen(5000);