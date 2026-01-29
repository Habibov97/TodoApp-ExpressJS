let { todos, updateStore, readStore } = require('../store');

const todoListByServices = async () => {
  let todos = await readStore('todo');

  return todos || [];
};
const createTodoByServices = async (title, content) => {
  const todos = await todoListByServices();

  const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

  const todo = {
    id,
    title,
    content,
  };

  todos.push(todo);
  await updateStore('todo', todos);

  return todo;
};

const getTodoByServices = (id) => {
  const todo = todos.find((td) => td.id === id);
  if (!todo) throw new Error('Coulnt find todo');
  return todo;
};

const updateTodoByServices = async (id, body) => {
  const todos = await todoListByServices();
  const todo = todos.find((td) => td.id === id);
  if (!todo) throw new Error('Couldnt update todo');

  for (const [key, value] of Object.entries(body)) {
    todo[key] = value;
  }

  await updateStore('todo', todos);

  return todo;
};

const deleteTodoByServices = async (id) => {
  let todos = await todoListByServices();
  const todo = todos.find((td) => td.id === id);
  if (!todo) throw new Error('Couldnt find todo for deletion...');

  todos = todos.filter((td) => td.id !== todo.id);

  await updateStore('todo', todos);

  return todos;
};

module.exports = {
  todoListByServices,
  createTodoByServices,
  updateTodoByServices,
  deleteTodoByServices,
};
