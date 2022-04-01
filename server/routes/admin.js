const admin_category =require('../controller/admin-category')
const router = require('express').Router();





router.get('/',(req,res)=>{
        admin_category.getCategory()
            .then((result)=>{
                if(!result) return res.status(204).send('No Category');
                return res.status(200).json({categories:result})
            }).catch(err=>{
                res.status(500).send(err);
        })
})

router.post('/create',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
        admin_category.createCategory(req.body.params)
            .then(() => {
                res.status(200).send('success');
            }).catch(err => {
                console.log(err);
        })
    // console.log(req.body.params.name);
})

router.post('/sub-category-manage-create',(req,res)=>{

    admin_category.createSubCategory(req.body.params)
        .then(()=>{
            res.status(200).send('success');
        }).catch(err=>{
            console.log(err);
    })

})

module.exports = router;
