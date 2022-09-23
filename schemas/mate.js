const mongoose = require('mongoose');
const { Schema } = mongoose;

const mate = new Schema({
    mateNo: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    registerId: {
        type: String
    },
    registerDate: {
        type: Date,
        default: Date.now()
    },
    modifyId: {
        type: String
    },
    modifyDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Mate', mate);