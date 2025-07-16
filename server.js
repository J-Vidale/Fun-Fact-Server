const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Route: GET /api/fun-fact
app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const funFact = response.data.text;

    res.json({ fact: funFact });
  } catch (error) {
    console.error('Error fetching fun fact:', error.message);
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
