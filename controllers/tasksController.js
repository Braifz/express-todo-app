let counter = 1;
const tasks = [];

const getTasks = (req, res) => {
  res.json(tasks);
};

const getTasksId = (req, res) => {};

const postTask = (req, res) => {
  const { body } = req;
  const { name, description } = body;

  if (name && description) {
    const task = {
      id: counter,
      name: name,
      description: description,
      completed: false,
    };
    counter = counter + 1;
    tasks.push(task);
    return res.sendStatus(201);
  }
  return res.sendStatus(400);
};

const putTask = (req, res) => {
  const { body } = req;
  const { name, description } = body;
  const { params } = req;

  if (params) {
    const task = tasks.map((task) => {
      if (task.id == params.id) {
        console.log(params, name, description);
        task = {
          ...task,
          name: name,
          description: description,
        };
      }
      return task;
    });
    return res.json(task);
  }
  return res.sendStatus(400);
};

const deleteTask = (req, res) => {};

module.exports = {
  getTasks,
  getTasksId,
  postTask,
  putTask,
  deleteTask,
};
