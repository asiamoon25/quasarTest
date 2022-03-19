const mongoose = require('mongoose');
const AutoIncreamentFactory = require('mongoose-sequence');

module.exports = (schema, mongoose, name, inc_field) => {
    const AutoIncrement = AutoIncreamentFactory(mongoose);
    const option = { id: `${name}_${inc_field}`, inc_field };
    schema.plugin(AutoIncrement, option);
};