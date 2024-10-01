const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const connectDB = require('./config/db');

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }); // Start the server on port 6000