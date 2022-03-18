const router = require('express').Router();
const Board = require('../models/board');


router.get('/',(req,res)=>{
       Board.findAll()
            .then(boards =>{
                if(!boards.length) return res.status(500).send('데이터 없음)')
                return res.status(200).json({board:boards})
            })
            .catch(err =>
                res.status(500).send(err)
            );
})

router.get('/list',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    Board.create(req.query)
    .then(()=>{
        return res.json({success:'success'});
    })
    .catch(err => res.status(500).send(err));
})


module.exports = router;
