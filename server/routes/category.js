const router = require('express').Router();
const Category = require('../controller/category');

// /api/category-manage/
router.post('/',(req,res)=>{
    Category.createCategory(req.body.params)
        .then(() =>{
            return res.status(200).json({returnCode:1 })
        }
        )
        .catch(err =>
            res.status(500).send(err)
        );
})

router.get('/get-category',(req,res)=>{
    Category.getCategory()
        .then(categories=>{
            if(!categories) return res.status(204).send('no data')
            return res.status(200).json({category: categories})
        })
})
module.exports = router;
