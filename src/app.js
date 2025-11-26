const express = require('express');
const path = require('path');

const buildStatusPayload = () => ({
  app: 'Cloud CI Showcase',
  status: 'up',
  environment: process.env.NODE_ENV || 'development',
  timestamp: new Date().toISOString(),
  ciHint: 'Automate tests + releases to stay confident.',
  professor: 'Dr. Ahmad',
});

const createApp = () => {
  const app = express();

  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.get('/api/info', (_req, res) => {
    res.json({
      message: 'Welcome to the Cloud CI/CD Showcase API built for Dr. Ahmad.',
      docs: 'Visit the GitHub Pages site to learn about the pipeline.',
      professor: 'Dr. Ahmad',
    });
  });

  app.get('/status', (_req, res) => {
    res.json(buildStatusPayload());
  });

  app.get('/health', (_req, res) => {
    res.status(200).send('OK');
  });

  return app;
};

module.exports = { createApp, buildStatusPayload };

