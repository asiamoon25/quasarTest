const AdminCategory = require('../models/admin-category');


module.exports ={

    async getCategory () {

        return AdminCategory.find({},{_id:0,__v:0}).sort({_id:1})

    },
    async createCategory (payload) {

        const category = new AdminCategory({
            name : payload.name,
            router_path: payload.router_path,
            children : []
        });
        return await category.save();
    },
    async createSubCategory(payload) {
        const name = payload.name
        const router_path = payload.router_path
        const id = payload.adminCategoryId

        const params = {name:name,router_path:router_path}
        const category = await AdminCategory.findById({_id:id}).exec()
        if(category){
            category.children.push(params)
            category.markModified('children')
          return  category.save().then(result=>{
                console.log('success')
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}

