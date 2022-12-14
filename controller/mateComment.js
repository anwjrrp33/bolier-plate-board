const express = require('express');
const router = express.Router();
const MateComment = require("../schemas/mateComment");

/**
 * @swagger
 * paths:
 *  /mate/:mateNo/mateComment:
 *    get:
 *      summary: "메이트 댓글 전체조회"
 *      description: "메이트 번호를 파라미터로 넘기고 Get방식으로 요청"
 *      tags: [MateComments]
 */
router.get('/', async (req, res) => {
    const mateComments = await MateComment.find({ mateNo: req.params.mateNo });
    return res.status(200).json(mateComments);
});

router.post('/', async (req, res) => {
    let mateCommentNo = await MateComment.findOne({ mateNo: req.params.mateNo }).sort({ mateCommentNo: -1 });
    mateCommentNo = mateCommentNo ? 1 : mateCommentNo + 1;

    const mateComment = new MateComment({
        mateCommentNo: mateCommentNo,
        mateNo: req.params.mateNo,
        content: req.body.content,
        registerId: 'anwjrrp33',
        modifyId: 'anwjrrp33'
    });
    
    await mateComment.save();

    return res.status(200).json({ success: true });
});

router.put('/:mateCommentNo', async (req, res) => {
    const { content } = req.body;
    await MateComment.updateOne({ mateNo: req.params.mateNo, mateCommentNo: req.params.mateCommentNo }, { $set: { content: content , modifyDate: Date.now() } });
    return res.status(200).json({ success: true });
});

router.delete('/:mateCommentNo', async (req, res) => {
    await MateComment.deleteOne({ mateNo: req.params.mateNo, mateCommentNo: req.params.mateCommentNo });
    return res.status(200).json({ success: true });
});   

module.exports = router;