const express = require('express');
const todoRouter = require('./routes/todo.router');
const noteRouter = require('./routes/note.router');
const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/todo', todoRouter);
app.use('/note', noteRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening port: ' + port);
});
