//DB Connection

const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://asianoo25:Dustkd4!@localhost:27017/blog',function(err) { // .connect is db connection
            if(err) {
                console.log('mongodb connection error : ', err);
            }
            console.log('mongodb connected');
        })
    }

    connect();

    mongoose.connection.on('disconnected',connect);
}
