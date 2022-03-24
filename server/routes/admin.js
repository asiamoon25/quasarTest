const router = require('express').Router();
const AdminCategory = require('../models/admin-category');




router.get('/',(req,res)=>{
    AdminCategory.find({})
        .then(admin_categories => {
            if(!admin_categories) return res.status(204).send('Admin Category Collection is empty');
            return res.status(200).json({AdminCategories : admin_categories})
        })
        .catch(err =>
            res.status(500).send(err)
        );
})

router.post('/create',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    AdminCategory.create(req.body)
        .then(()=>{
            return res.send('success');
        })
        .catch(err => res.status(500).send(err));
    // console.log(req.body);
})

module.exports = router;
