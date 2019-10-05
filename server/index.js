const express = require('express');
const app = express();   //llamado de express como una funcion

app.get('/', (req, res) =>{
    res.send({hi: 'there', by: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);