require('dotenv').config();

const mongoose = require('mongoose');

const connect = () => {
    mongoose
        .connect(process.env.URI, { 
            useNewUrlParser: true, useUnifiedTopology: true 
        })
        .then(() => console.log("MongoDB connect Success!"))
        .catch((err) => console.error(err));
}

module.exports = connect;