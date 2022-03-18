const mongoose = require('mongoose');
const AutoIncreament = require('mongoose-sequence')(mongoose);
const boardSchema = new mongoose.Schema({
    title : String,
    writer : String,
},{_id: false});
boardSchema.plugin(AutoIncreament,{inc_field: 'id'});
//Create Board
boardSchema.statics.create = function (payload) {
  const board = new this(payload);

  return board.save();
};

//Find All
boardSchema.statics.findAll = function () {
    return this.find({},{_id:0,__v:0});
}

module.exports = mongoose.model('Board',boardSchema);
