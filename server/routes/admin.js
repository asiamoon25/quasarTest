const admin_category =require('../controller/admin-category')

const router = require('express').Router();





router.get('/',(req,res)=>{

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

router.post('/sub-category-create',(req,res)=>{

    admin_category.updateSubCategory(req.body.params)
        .then(()=>{
            res.status(200).send('success');
        }).catch(err=>{
            console.log(err);
    })

})

module.exports = router;
