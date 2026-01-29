const { updateNotes } = require('../controllers/note.controller');
const { readStore, updateStore } = require('../store');

const getNoteByServices = async () => {
  let notes = await readStore('note');

  return notes || [];
};

const createContentByServices = async (content) => {
  const notes = await getNoteByServices();

  const id = notes.length ? notes[notes.length - 1].id + 1 : 1;

  const data = {
    id,
    content,
  };

  notes.push(data);
  await updateStore('note', notes);

  return data;
};

const updateContentByServices = async (id, body) => {
  const notes = await getNoteByServices();
  const note = notes.find((nt) => nt.id === id);
  console.log(body);

  for (const [key, value] of Object.entries(body)) {
    note[key] = value;
  }

  // notes.push(note);
  await updateStore('note', notes);

  return note;
};

const deleteContentByServices = async (id) => {
  let notes = await getNoteByServices();
  notes = notes.filter((nt) => nt.id !== id);

  await updateStore('note', notes);

  return null;
};

module.exports = {
  getNoteByServices,
  createContentByServices,
  updateContentByServices,
  deleteContentByServices,
};
