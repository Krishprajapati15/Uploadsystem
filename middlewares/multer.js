const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, res) => {
        res(null, 'uploads/');
    },
    filename: (req, file, res) => {
        res(null, file.originalname);
    },

});

const upload = multer({ storage : storage });

module.exports = upload;