const mongoose = require('mongoose')

const Board = require('../models/board')


module.exports={

    async createBoard(payload) {

        const board = new Board({
            title : payload.title,
            content : payload.content,
            write_date: payload.write_date,
            modify_date : payload.modify_date,
            c_name: payload.c_name
        });

        return await board.save();

    },
    async getBoard() {

        return Board.find({});

    },
    async deleteBoard(){

    },
    async cateBoard(payload) {

        return Board.findById(payload.categoryId);

    },
    async countBoard () {
        return Board.count();
    }

}

