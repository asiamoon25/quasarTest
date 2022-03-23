const router = require('express').Router();
const AdminCategory = require('../models/admin-category');




router.get('/',(req,res)=>{
    AdminCategory.findAll()
        .then(admin_categories => {
            if(!admin_categories) return res.send(204).send('Admin Category Collection is empty');
            return res.send(200).json({AdminCategories : admin_categories})
        })
        .catch(err =>
            res.status(500).send(err)
        );
})

router.post('/create',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    // AdminCategory.create(req.params)
    //     .then(()=>{
    //         return res.send('success');
    //     })
    //     .catch(err => res.status(500).send(err));
    res.send()
})

module.exports = router;
