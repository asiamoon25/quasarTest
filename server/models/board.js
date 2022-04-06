const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    title : String,
    content : String,
    write_date: { type: Date, default: Date.now },
    modify_date : { type: Date, default: Date.now },
    c_router_path: String
});



module.exports = mongoose.model('Board',boardSchema);
