const express = require('express');
const router = express.Router();

const mateRouter = require('../controller/mate');
router.use('/mate', [mateRouter]);

const mateCommentRouter = require('../controller/mateComment');
router.use('/mate/:mateNo/mateComment', [mateCommentRouter]);

module.exports = router;