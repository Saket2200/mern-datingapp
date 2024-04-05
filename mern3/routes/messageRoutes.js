const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.post('/send', messageController.sendMessage);
router.get('/:userId', messageController.getMessages);

module.exports = router;
