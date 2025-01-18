const express = require('express');
const router = express.Router();

const File = require('../models/file');
const upload = require('../middlewares/multer');

router.post('/', upload.single('file'), async(req, res) => {
    try{
        const newFile = new File({
            filename : req.file.originalname,
            path : req.file.path,
        });
        await newFile.save();

        res.redirect('/');
    } catch (err){
        console.error(err);
        res.status(500).send('internal server error');
    }
});

module.exports = router;
