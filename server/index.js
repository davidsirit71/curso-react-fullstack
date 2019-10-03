const express = require('express');
const app = express();   //llamado de express como una funcion

app.get('/', (req, res) =>{
    res.send({hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);