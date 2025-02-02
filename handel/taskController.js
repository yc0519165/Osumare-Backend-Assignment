const { tasks, Task } = require("./task.model");

const getTasks = (req, res) => {
  res.status(200).json({ success: true, tasks });
};

const getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json({ success: true, task });
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  const newTask = new Task(title, description);
  tasks.push(newTask);
  res.status(201).json({ success: true, task: newTask });
};

const updateTask = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  task.title = title;
  task.description = description;
  res.status(200).json({ success: true, task });
};

const deleteTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks.splice(index, 1);
  res.status(200).json({ success: true, message: "Task deleted" });
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
