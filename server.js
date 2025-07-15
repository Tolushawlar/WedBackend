require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/coordinators', require('./routes/coordinators'));
app.use('/api/bookings', require('./routes/bookings'));



// Start server and connect to database
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();