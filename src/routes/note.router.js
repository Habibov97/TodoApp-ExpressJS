const express = require('express');
const noteController = require('../controllers/note.controller');
const noteRouter = express.Router();

noteRouter.route('/').get(noteController.getNotes).post(noteController.createNotes);
noteRouter.route('/:id').patch(noteController.updateNotes).delete(noteController.deleteNotes);

module.exports = noteRouter;
