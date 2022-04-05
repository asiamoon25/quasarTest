const mongoose = require('mongoose');
const Category = require('../models/category');

module.exports = {

    async createCategory (payload) {

        const category = new Category({
            c_name : payload.name,
            router_path: payload.router_path
        });
        return await category.save();

    },
    async getCategory () {

        return Category.find({});

    },
    async deleteCategory() {

    }

}

//Create Category
// categorySchema.statics.create = function (payload) {
//     const category = new this(payload);
//     return category.save();
// };
//
// //Find All
// categorySchema.statics.findAll = function () {
//     return this.find({},{__v:0});
// }
//
// //Find And Delete One
// categorySchema.static.findAndDelete = function (payload) {
//     const category = new this();
//
//     return category.findOneAndDelete({
//         c_name : payload
//     });
// }



