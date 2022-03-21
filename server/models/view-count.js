const mongoose = require('mongoose');
const viewCountSchema = new mongoose.Schema({
    b_id : String,
    session_id : String
});

//Create View_Count
viewCountSchema.statics.create = function (payload) {
    const viewCount = new this(payload);
    return viewCount.save();
};

//Find All
viewCountSchema.statics.findAll = function () {
    return this.find({},{_id:0,__v:0});
}

module.exports = mongoose.model('View_Count',viewCountSchema);
