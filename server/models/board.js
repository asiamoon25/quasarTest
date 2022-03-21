const mongoose = require('mongoose')
    ,Schema = mongoose.Schema
const category = require('./category')

const boardSchema = new mongoose.Schema({
    title : String,
    content : String,
    write_date: String,
    modify_date : String,
    c_id: [{ type: Schema.Types.ObjectId, ref: category}],
});

//Create Board
boardSchema.statics.create = function (payload) {
    const board = new this(payload);

    return board.save();
};

//Find All
boardSchema.statics.findAll = function () {
    return this.find({},{_id:0,__v:0});
}

boardSchema.static.findAndDelete = function(payload) {
    const board = new this(payload);

    return this.findOneAndDelete({
        _id: payload
    })
}

// Category에 따른 Board List
boardSchema.static.findByCategory = function(payload) {
    return this.find({c_id : payload.c_id})
}

module.exports = mongoose.model('Board',boardSchema);
