const AdminCategory = require('../models/admin-category');

module.exports ={

    // function
   async getAdminCategory () {

        try{
            return await AdminCategory.find({});
        }catch(err){
            console.log(err)
        }
    },

// 만약을 대비해서 create 도 생성함
    async createCategory (params) {
        const name = params.name;
        const router_path_param = params.router_path;
        const dbModel = new AdminCategory({
            main_name : name,
            router_path : router_path_param,
            children: undefined
        });
        dbModel.save()
            .then(res=>{
                console.log('저장 성공')
            }).catch(err=>{
                console.log(err)
        });

        // return
        // return 1;
    },

    async updateSubCategory (adminCategoryId,childName,childRouterPath){
        try{
            const admin_category = await AdminCategory.findById(adminCategoryId).exec();

            admin_category.children.sub_name(childName)
            admin_category.children.sub_router_path(childRouterPath)

            return admin_category.save();
        }catch (e) {
            console.log(e);
        }
    }
}

