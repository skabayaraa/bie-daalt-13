const request = require('supertest');
const app = require('../src/app');

describe('Task API Tests', () => {

  let taskId;

  test('GET /tasks should return empty or array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /tasks should create task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');

    taskId = res.body.id;
  });

  test('GET /tasks after creation should contain task', async () => {
    const res = await request(app).get('/tasks');
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('PUT /tasks should update task', async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({ title: 'Updated Task', completed: true });

    expect(res.body.title).toBe('Updated Task');
    expect(res.body.completed).toBe(true);
  });

  test('DELETE /tasks should delete task', async () => {
    const res = await request(app)
      .delete(`/tasks/${taskId}`);

    expect(res.body.message).toBe('Task deleted');
  });

  test('GET /tasks should still return array after delete', async () => {
    const res = await request(app).get('/tasks');
    expect(Array.isArray(res.body)).toBe(true);
  });

});