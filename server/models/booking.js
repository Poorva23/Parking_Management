const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
    enum: ['2-wheeler', '3-wheeler', '4-wheeler'],
  },
  fuelType: {
    type: String,
    required: true,
    enum: ['Petrol', 'Diesel', 'CNG', 'Electric'],
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
