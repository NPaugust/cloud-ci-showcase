const request = require('supertest');
const { createApp } = require('../src/app');

describe('Cloud CI Showcase API', () => {
  const app = createApp();

  it('returns welcome payload on info route', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/Cloud CI\/CD Showcase/);
    expect(res.body.professor).toBe('Dr. Ahmad');
  });

  it('exposes status endpoint with runtime metadata', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'up');
    expect(res.body).toHaveProperty('timestamp');
    expect(res.body).toHaveProperty('professor', 'Dr. Ahmad');
  });

  it('reports health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });
});

