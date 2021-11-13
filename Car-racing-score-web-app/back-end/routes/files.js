const express = requrie('express');
const router = express.Router();
const { upload } = requrie('../middleware/uploadFile.js');


router.use('/', express.static(__dirname + '/public/images'));

router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({msg: `file has been uploaded successfully! ${req.file.filename}`})
})

module.exports = router;