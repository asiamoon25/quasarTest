const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    c_name: String,
    router_path: String
});

module.exports = mongoose.model('Category',categorySchema);
