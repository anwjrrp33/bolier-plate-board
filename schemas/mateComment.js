const mongoose = require('mongoose');
const { Schema } = mongoose;

const mateComment = new Schema({
    mateCommentNo: {
        type: Number,
        unique: true
    },
    mateNo: {
        type: Schema.Types.ObjectId,
        ref: 'mates',
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

module.exports = mongoose.model('MateComment', mateComment);