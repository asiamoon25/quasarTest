const admin_category =require('../controller/admin-category')

const router = require('express').Router();





router.get('/',(req,res)=>{
    admin_category.findAll()
        .then(adminCategories => {
            if(!adminCategories) return res.status(204).send('Admin Category Collection is empty');
            return res.status(200).json({AdminCategories : adminCategories})
        })
        .catch(err =>
            res.status(500).send(err)
        );
})

router.post('/create',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    admin_category.create(req.body.params)
        .then(()=>{
            return res.send('success');
        })
        .catch(err => res.status(500).send(err));
    // console.log(req.body.params.name);
})

module.exports = router;
