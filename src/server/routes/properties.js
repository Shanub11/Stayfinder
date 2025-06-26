import express from 'express';
import multer from 'multer';
import Property from '../models/Property.js'; // Make sure this exists

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('propertyImage'), async (req, res) => {
  try {
    const { propertyName, propertyType, location, price } = req.body;
    const propertyImage = req.file ? req.file.filename : null;

    const property = new Property({
      propertyName,
      propertyType,
      location,
      price: Number(price), // Convert to number here
      propertyImage,
    });

    await property.save();
    res.status(201).json({ message: 'Property posted!' });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ message: 'Error posting property', error: err.message });
  }
});

export default router;