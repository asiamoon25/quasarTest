const mongoose = require('mongoose');
const likeCountSchema = new mongoose.Schema({
    b_id : String,
    session_id: String
});

//Insert LikeCount
likeCountSchema.statics.create = function (payload) {
    const likeCount = new this(payload);
    return likeCount.save();
};

likeCountSchema.static.update = function(payload){
    const likeCount = new this(payload);
    return likeCount.update();
}

//Find All
likeCountSchema.statics.findAll = function () {
    return this.find({},{_id:0,__v:0});
}

module.exports = mongoose.model('Like_Count',likeCountSchema);
