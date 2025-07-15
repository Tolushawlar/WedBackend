const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log(`Connection string: ${process.env.MONGODB_URI ? '***' + process.env.MONGODB_URI.substring(process.env.MONGODB_URI.indexOf('@')) : 'Not defined'}`); // Safely log part of the connection string
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
    return true;
  } catch (error) {
    console.error('Database connection error:', error.message);
    throw error;
  }
};

module.exports = connectDB;