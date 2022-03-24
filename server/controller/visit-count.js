const mongoose = require('mongoose');
const visitCountSchema = new mongoose.Schema({
    session_id : String,
    visit_date : String
});

//Insert visitCount
visitCountSchema.statics.create = function (payload) {
    const visitCount = new this(payload);
    return visitCount.save();
};

visitCountSchema.static.update = function(payload){
    const visitCount = new this(payload);
    return visitCount.update();
}

//Find All
visitCountSchema.statics.findAll = function () {
    return this.find({},{_id:0,__v:0});
}

module.exports = mongoose.model('Visit_Count',visitCountSchema);
