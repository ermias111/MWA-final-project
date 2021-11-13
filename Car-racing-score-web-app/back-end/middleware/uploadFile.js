const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    destination: 'public/images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
            + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: imageStorage, 
    limits: {
        fileSize: 3000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg)$/)){
            return cb(new Error("File type not allowed!"))
        }

        
        cb(undefined, true)
    }
})

module.exports = {
    upload
}