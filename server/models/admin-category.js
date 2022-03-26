const mongoose = require('mongoose')

const { Schema } = mongoose

const admin_sub_categorySchema = new Schema({
    name : String,
    router_path : String
})

const admin_categorySchema = new Schema({
    name : String,
    router_path : String,
    children: [admin_sub_categorySchema]
});

const admin_category = mongoose.model('AdminCategory',admin_categorySchema)


module.exports = admin_category
