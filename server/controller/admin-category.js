const adminCategory = require('../models/admin-category');


module.exports ={
    // function
   async findAll () {
        return await this.find({});
    },

// 만약을 대비해서 create 도 생성함
    async create (params) {
        const name = params.name;
        const router_path = params.router_path;

        return  await adminCategory.create(params);

        // return
        // return 1;
    },

    async updateSubCategory (adminCategoryId,childName,childRoutePath){
        const adminCategory = await this.findById(adminCategoryId);
        adminCategory.children.name = childName;
        adminCategory.children.router_path = childRoutePath;

        return  adminCategory.save();
    }
}

