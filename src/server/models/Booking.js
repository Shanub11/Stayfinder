import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  checkin: String,
  checkout: String,
  name: String,
  persons: Number,
  contact: String
});

export default mongoose.model('Booking', bookingSchema);