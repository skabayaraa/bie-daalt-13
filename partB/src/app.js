const express = require('express');

const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Tracker API');
});

app.use('/tasks', tasksRouter);

module.exports = app; // already байгаа байх

module.exports = app;