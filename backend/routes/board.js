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


module.exports = router;
