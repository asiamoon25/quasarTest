const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    session_id : String,
    visit_date: String
});

//Create Board
sessionSchema.statics.create = function (payload) {
    const session = new this(payload);

    return session.save();
};

module.exports = mongoose.model('Session',sessionSchema);