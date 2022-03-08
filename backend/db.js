//DB Connection

const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://yeonsang:Dustkd4!@localhost:27017',function(err) { // .connect is db connection
            if(err) {
                console.log('mongodb connection error : ', err);
            }
            console.log('mongodb connected');
        })
    }

    connect();

    mongoose.connection.on('disconnected',connect);
}
