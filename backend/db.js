//DB Connection

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
module.exports = () => {
    function connect() {
        mongoose.connect(process.env.DB_URI,function(err) { // .connect is db connection
            if(err) {
                console.log('mongodb connection error : ', err);
            }
            console.log('mongodb connected');
        })
    }

    connect();

    mongoose.connection.on('disconnected',connect);
}
