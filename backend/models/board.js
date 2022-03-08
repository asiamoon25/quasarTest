const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title : String,
    writer : String,

});

//Create Board
boardSchema.statics.create = function (payload) {
  const board = new this(payload);

  return board.save();
};

//Find All
boardSchema.statics.findAll = function () {
    return this.find({});
}

module.exports = mongoose.model('Board',boardSchema);
