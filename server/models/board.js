const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    title : String,
    content : String,
    write_date: String,
    modify_date : String,
    c_name: String,
    category: String
});



module.exports = mongoose.model('Board',boardSchema);
