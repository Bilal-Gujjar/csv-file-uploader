const express = require('express');
const dataController = require('../controllers/dataController');
const uploadMiddleware = require('../middlewares/upload');

const router = express.Router();

// router.get('/', dataController.helloWorld);
router.get('/data', dataController.getData);
router.post('/upload', uploadMiddleware, dataController.uploadData);
router.post('/generate', dataController.generateData);

module.exports = router;
