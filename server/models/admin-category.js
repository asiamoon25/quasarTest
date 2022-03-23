const mongoose = require('mongoose')
    , Schema = mongoose.Schema


const admin_categorySchema = Schema({
    _id : Number,
    name: String,
    depth: Number
});



admin_categorySchema.static.findAll = function(){
    return this.find({})
        .populate('_admin_category_number')
        .exec(function(err,adminCategory){
            if(err) return console,log(err);
            console.log('Success');
        });
}

admin_categorySchema.static.create = function (payload) {
    const category = new this(payload);

    return category.save();
}


module.exports = mongoose.model('AdminCategory',admin_categorySchema);



