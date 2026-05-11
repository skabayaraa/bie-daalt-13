const express = require('express');
const router = express.Router();

let tasks = [];

// GET all
router.get('/', (req, res) => {
  res.json(tasks);
});

// CREATE
router.post('/', (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  tasks.push(task);

  res.status(201).json(task);
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);

  res.json({ message: 'Task deleted' });
});

// UPDATE
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

module.exports = router;