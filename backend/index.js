const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
const friendRoutes = require('./routes/friendRoutes');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/interspace-db'; // Replace with your MongoDB URI
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/api', postRoutes);
app.use('/api', authRoutes);
app.use('/api', friendRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
