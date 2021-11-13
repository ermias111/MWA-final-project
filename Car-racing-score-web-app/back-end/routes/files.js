const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/uploadFile.js');

router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({msg: `file has been uploaded successfully! ${req.file.filename}`})
})

module.exports = router;