const {
  getNoteByServices,
  createContentByServices,
  updateContentByServices,
  deleteContentByServices,
} = require('../services/note.services');

exports.getNotes = async (req, res) => {
  const notes = await getNoteByServices();

  res.status(200).json({
    status: 'success',
    notes,
  });
};

exports.createNotes = async (req, res) => {
  try {
    const { content } = req.body;
    if (content && content.length < 3) throw new Error('Content length must be  greater than 3 char');

    const note = await createContentByServices(content);

    res.status(201).json({ status: 'success', message: 'Note created!', note });
  } catch (error) {
    console.log(error);

    res.json({ message: error.message });
  }
};

exports.updateNotes = async (req, res) => {
  try {
    const id = req.params.id * 1;
    if (!id) throw new Error('Id is invalid');
    const body = req.body;

    const updatedNote = await updateContentByServices(id, body);

    res.status(200).json({ status: 'success', message: 'Content has been updated', updatedNote });
  } catch (error) {
    console.log(error);

    res.status(400).json({ status: 'failed', message: error.message });
  }
};

exports.deleteNotes = async (req, res) => {
  try {
    const id = req.params.id * 1;
    if (!id) throw new Error('Id is invalid');

    await deleteContentByServices(id);
    res.json({ message: 'Note has been deleted' });
  } catch (error) {
    res.status(400).json({ status: 'failed', message: error.message });
  }
};
