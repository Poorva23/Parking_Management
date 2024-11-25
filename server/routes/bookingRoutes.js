const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// @route POST /api/bookings
// @desc Create a new booking
router.post('/', async (req, res) => {
  const { vehicleType, fuelType, price } = req.body;

  if (!vehicleType || !fuelType || price === undefined) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newBooking = new Booking({ vehicleType, fuelType, price });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

// @route GET /api/bookings
// @desc Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

module.exports = router;
