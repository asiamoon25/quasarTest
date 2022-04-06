const mongoose = require('mongoose')

const Board = require('../models/board')


module.exports={

    async createBoard(payload) {

        const board = new Board({
            title : payload.title,
            content : payload.content,
            c_router_path: payload.c_router_path
        });

        return await board.save();

    },
    async getBoard() {

        return Board.find({});

    },
    async deleteBoard(){

    },
    async cateBoard(payload) {

        return Board.find({c_router_path: payload});

    },
    async countBoard () {
        return Board.count();
    },
    async categoryPage(payload) {
       return Board.find({c_router_path: payload}).count();
    }

}

