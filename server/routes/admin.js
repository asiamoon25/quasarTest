const admin_category =require('../controller/admin-category')

const router = require('express').Router();





router.get('/',(req,res)=>{
    admin_category.getAdminCategory()
        .then(adminCategories => {
            if(!adminCategories) return res.status(204).send('Admin Category Collection is empty');
            return res.status(200).json({AdminCategories : adminCategories})
        })
        .catch(err =>
            res.status(500).send(err.data)
        );
})

router.post('/create',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    admin_category.createCategory(req.body.params)
        .then(()=>{
            return res.send('success');
        })
        .catch(err =>{
            console.log(err);
            return res.status(500).send(err);
        });
    // console.log(req.body.params.name);
})

router.post('/sub-category-create',(req,res)=>{

    const adminCategoryId = req.body.params.adminCategoryId
    const childName = req.body.params.childName
    const childRouterPath = req.body.params.childRouterPath

    admin_category.updateSubCategory(adminCategoryId,childName,childRouterPath)
        .then(()=>{
            return res.send('success');
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
    })
})

module.exports = router;
