const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; // esto hace lo mismo de arriba por deestrucutracion

const userSchema = new Schema({
    googleId: String,
    nameTEST: String
});

mongoose.model('users', userSchema);