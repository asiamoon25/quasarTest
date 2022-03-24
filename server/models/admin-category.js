

const mongoose = require('mongoose')

const admin_categorySchema = new mongoose.Schema({

    name: String,
    depth: Number
});


admin_categorySchema.static.findAll = function(){
    return this.find({});
}

admin_categorySchema.static.create = function (payload) {
    const category = new this(payload);

    return category.save();
}


module.exports = mongoose.model('AdminCategory',admin_categorySchema);



