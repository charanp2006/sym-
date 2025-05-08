const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const responseText = `This is a simulated AI response for: '${message}'`;
  res.json({ reply: responseText });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});