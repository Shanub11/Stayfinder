import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/bookings.js';


// Load environment variables
dotenv.config();

// Debug environment variables
console.log('Environment Variables:');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Loaded' : 'Missing!');
console.log('PORT:', process.env.PORT || 5000);

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Enhanced MongoDB connection setup
const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB initial connection failed:', err.message);
    console.log('Retrying connection in 5 seconds...');
    // Retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

// MongoDB connection event listeners
mongoose.connection.on('connecting', () => {
  console.log('Connecting to MongoDB...');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected. Attempting to reconnect...');
  connectDB();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({
    status: 'UP',
    database: dbStatus,
    timestamp: new Date()
  });
});

// Start server only if DB connection is established
const startServer = () => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
};

// Initial connection to MongoDB
connectDB().then(() => {
  startServer();
});

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  // You might want to exit the process in production
  // process.exit(1);
});