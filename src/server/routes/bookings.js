import express from 'express';
import Booking from '../models/Booking.js'; // Create this Mongoose model

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving booking', error: err.message });
  }
});

export default router;