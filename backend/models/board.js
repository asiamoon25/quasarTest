const autoIdSetter = require('../db-config/auto-id-setter');
const mongoose = require('mongoose');
const boardSchema = new mongoose.Schema({
    title : String,
    writer : String,
});

autoIdSetter(boardSchema,mongoose,'board','id');
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
