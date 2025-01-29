const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const notesRoutes = require('./routes/notesRoutes');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');
const path = require('path');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });

app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);

// DEPLOYMENT -------------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, '/frontend/build')));

    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname1, 'frontend', 'build', 'index.html'))
    );
  }
  else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }


// DEPLOYMENT -------------------------


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }); // Start the server on port 6000