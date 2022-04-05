const router = require('express').Router();
const Board2 = require('../models/board');
const Board = require('../controller/board')


router.get('/',(req,res)=>{
    Board.getBoard()
        .then(boards =>{
            if(!boards.length) return res.status(204).send('데이터 없음)')
            return res.status(200).json({board:boards})
        })
        .catch(err =>
            res.status(500).send(err)
        );
})

router.get('/create',(req,res)=>{
    // Board.create(req.body).then(()=>{}).catch(err=>res.status(500).send(err));
    Board.createBoard(req.query)
        .then(()=>{
            return res.send('success');
        })
        .catch(err => res.status(500).send(err));
})

router.get('/get-category',(req,res)=>{

    Board.cateBoard(req.body.params.categoryId).
        then(boards=>{
            if(!boards) return res.status(204).send('no data')
            return res.status(200).json({board:boards})
    }).catch(err=>{
        res.status(500).send(err)
    });
})

module.exports = router;
