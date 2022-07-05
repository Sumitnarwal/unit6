const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://sumit123:sumit_123@cluster0.s7eel.mongodb.net/urlShorten?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     //   userCreateIndex:true
    })

};
module.exports = connect;



