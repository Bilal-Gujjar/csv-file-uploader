const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(csv)$/)) {
            cb(new Error('Only .csv format allowed!'), false);
        } else {
            cb(null, true);
        }
    },
});

const uploadMiddleware = function (req, res, next) {
    upload.single('file')(req, res, function (err) {
        if (err instanceof multer.MulterError || err) {
            res.status(400).json({ error: err.message });
        } else if (!req.file) {
            res.status(400).json({ error: 'Please upload a file' });
        } else {
            next();
        }
    })
}

module.exports = uploadMiddleware;
