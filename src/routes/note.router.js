const express = require('express');
const noteController = require('../controllers/note.controller');
const router = express.Router();

router.route('/').get(noteController.getNotes);

module.exports = router;
