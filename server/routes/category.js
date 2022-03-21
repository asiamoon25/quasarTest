const router = require('express').Router();
const Category = require('../models/category');

// /api/category/
router.post('/',(req,res)=>{
    Category.create(req.body)
        .then(() =>{
            return res.status(200).json({returnCode:1 })
        }
        )
        .catch(err =>
            res.status(500).send(err)
        );
})
// /api/cateogry/find-category
router.get('/find-category',(req,res)=>{
    Category.findAll()
        .then(categoryList =>{
            if(!categoryList){
                return res.status(204).json({returnMsg : 'No Data Category Collection'})
            }
            return res.status(200).json({categoryList: categoryList});
        })
        .catch(err => res.status(500).send(err));
})
// /api/category/delete-category
router.post('/delete-category',(req,res) => {
    Category.findOneAndDelete({
        c_name : req.params
        }).then(()=>{
            return res.status(200).json({returnMsg : 'Category is deleted.'})
        }).catch(err=>{
            return res.status(500).send(err)
        })
})
// /api/category/modify-category   Update Category Name
router.post('modify-category',(req,res)=>{
    Category.findOneAndUpdate({
        c_name: req.params.categoryName,
        $set: {
            c_name: req.params.modifyName
        }
    }).then(()=>{
        return res.status(200).json({returnMsg: 'Success Modify Category Name'})
    }).catch(err=>{
        return res.status(500).send(err);
    })
})

module.exports = router;
