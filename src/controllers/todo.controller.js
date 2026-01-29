const {
  createTodoByServices,
  getTodoByServices,
  updateTodoByServices,
  deleteTodoByServices,
  todoListByServices,
} = require('../services/todo.services');

exports.todoList = async (req, res) => {
  res.status(200).json(await todoListByServices());
};

exports.createTodo = async (req, res) => {
  try {
    const { title, content } = req.body;

    // if (!title || !content) return false;

    const todo = await createTodoByServices(title, content);

    res.status(201).json({ status: 'success', message: 'todo has been created!', todo });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.toDo = async (req, res) => {
  try {
    const id = req.params.id * 1;

    const todo = await getTodoByServices(id);

    res.status(200).json({ status: 'success', todo });
  } catch {
    res.status(401).json({ message: 'Coudnt find Todo' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id * 1;
    const body = req.body;

    const todo = await updateTodoByServices(id, body);

    res.status(200).json({ status: 'success', message: 'updated successfully', todo });
  } catch (error) {
    res.status(401).json({ message: 'Coudnt update Todo' });
  }
};

// exports.updateTodoWithPut = (req, res) => {
//   const id = req.params.id * 1;
//   const { content } = req.body;
//   const todo = todos.findIndex((td) => td.id === id);

//   if (todo === undefined) res.json({ status: 'failed', message: 'there is no such todo in this index' });

//   todos[todo].content = content;

//   res.status(200).json({ status: 'success', message: 'todo is updated' });
// };

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id * 1;

    todos = await deleteTodoByServices(id);

    res.json({ status: 'success', message: 'todo is deleted' });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
