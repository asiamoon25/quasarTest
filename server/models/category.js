const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    c_name: String,
    routerPath: String
});

//Create Category
categorySchema.statics.create = function (payload) {
    const category = new this(payload);
    return category.save();
};

//Find All
categorySchema.statics.findAll = function () {
    return this.find({},{_id:0,__v:0});
}

//Find And Delete One
categorySchema.static.findAndDelete = function (payload) {
    const category = new this();

    return category.findOneAndDelete({
        c_name : payload
    });
}



module.exports = mongoose.model('Category',categorySchema);
