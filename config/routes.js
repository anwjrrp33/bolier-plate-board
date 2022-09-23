const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Mates
 *   description: 메이트 추가 수정 삭제 조회
 */
const mateRouter = require('../controller/mate');
router.use('/mate', [mateRouter]);
/**
 * @swagger
 * tags:
 *   name: MateComments
 *   description: 메이트 댓글 추가 수정 삭제 조회
 */
const mateCommentRouter = require('../controller/mateComment');
router.use('/mate/:mateNo/mateComment', [mateCommentRouter]);

module.exports = router;