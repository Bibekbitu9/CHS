import 'dotenv/config';
import express from 'express';
import applyHandler from './api/apply.js';
import membershipHandler from './api/membership.js';

const app = express();
// Allow parsing up to 10MB of JSON to support base64 encoded resumes
app.use(express.json({ limit: '10mb' }));

app.post('/api/apply', async (req, res) => {
  try {
    await applyHandler(req, res);
  } catch (error) {
    console.error('Error in handler:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.post('/api/membership', async (req, res) => {
  try {
    await membershipHandler(req, res);
  } catch (error) {
    console.error('Error in handler:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running locally on http://localhost:${PORT}`);
});
