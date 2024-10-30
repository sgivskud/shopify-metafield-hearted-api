const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Define API endpoint for handling customer data
app.post('/api/save', async (req, res) => {
  const { email, productId } = req.body;

  if (!email || !productId) {
    return res.status(400).json({ error: 'Email and Product ID are required.' });
  }

  // Placeholder logic to store or process the data
  res.status(200).json({ message: 'Data received successfully.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
