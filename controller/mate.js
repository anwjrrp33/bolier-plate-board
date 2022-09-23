const express = require('express');
const router = express.Router();
const Mate = require("../schemas/mate");

/** 
 * @swagger
 *     components:
 *         schemas:
 *             Mate:
 *                 type: object
 *                 required:
 *                     - mateNo
 *                     - title
 *                     - content
 *                 properties:
 *                     mateNo:
 *                         type: Number
 *                         description: The unique key of the mate.
 *                     title:
 *                         type: String
 *                         description: The title of your mate.
 */

/**
 * @swagger
 * paths:
 *  /mate:
 *    get:
 *      summary: "메이트 전체조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [Mates]
 *      responses:
 *        "200":
 *          description: 전체 메이트 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: './schemas/mate'
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *                          [
 *                            { "mateNo": 1, "title": "제목", "content": "내용", "registerId": "작성자", "registerDate": "작성일", "modifyId": "수정자", "modifyDate": "수정일" },
 *                            { "mateNo": 2, "title": "제목", "content": "내용", "registerId": "작성자", "registerDate": "작성일", "modifyId": "수정자", "modifyDate": "수정일" },
 *                          ]
 */
router.get('/', async (req, res) => {
    const mates = await Mate.find({});
    return res.status(200).json(mates);
});

router.post('/', async (req, res) => {
    let mateNo = await Mate.findOne().sort({ mateNo: -1 });
    mateNo = mateNo ? 1 : mateNo + 1;

    const mate = new Mate({
        mateNo: mateNo,
        title: req.body.title,
        content: req.body.content,
        registerId: 'anwjrrp33',
        modifyId: 'anwjrrp33'
    });
    
    await mate.save();

    return res.status(200).json({ success: true });
});

router.get('/:mateNo', async(req, res) => {
    return res.status(200).json(await Mate.findOne({ mateNo: req.params.mateNo }));
});

router.put('/:mateNo', async (req, res) => {
    const { title, content } = req.body;
    await Mate.updateOne({ mateNo: req.params.mateNo }, { $set: { title: title, content: content, modifyDate: Date.now() } });
    return res.status(200).json({ success: true });
});

router.delete('/:mateNo', async (req, res) => {
    await Mate.deleteOne({ mateNo: req.params.mateNo });
    return res.status(200).json({ success: true });
});    

module.exports = router;