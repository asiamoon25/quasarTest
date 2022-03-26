const mongoose = require('mongoose')

const {Schema} = mongoose;

const admin_sub_categorySchema = new mongoose.Schema({
    sub_name : String,
    sub_router_path: String,
    main_id: [{type: Schema.Types.ObjectId, ref:'AdminCategory'}]
});

const admin_sub_category = mongoose.model('AdminSubCategory',admin_sub_categorySchema);

const admin_categorySchema = new mongoose.Schema({
    main_name: String,
    router_path: String,
    children: admin_sub_categorySchema
});

const admin_category = mongoose.model('AdminCategory',admin_categorySchema)


module.exports = admin_category
module.exports = admin_sub_category
