const express = require('express');
const router = express.Router();
const Mate = require("../schemas/mate");

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