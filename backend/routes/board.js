const router = require('express').Router();
const Board = require('../models/board');


router.get('/',(req,res)=>{
    Board.find()
        .then(()=>{
            // if(!boards.length) return res.status(404).send({err:'Board Not Found'});
            // res.send(`find successfully: ${boards}`);

        })
        .catch(err => res.status(500).send(err));
    res.send('success!');
})

router.post('/list',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    Board.create(req.body)
    .then(()=>{
        res.status(200).send('S');
    })
    .catch(err => res.status(500).send(err));
})


module.exports = router;
