const mongoose = require('mongoose');

const fileSchema =  new mongoose.Schema({
    filename: String,
    path : String,
});

const file = mongoose.model('file', fileSchema);

module.exports = File;