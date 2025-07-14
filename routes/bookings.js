const express = require('express');
const { body, validationResult } = require('express-validator');
const Booking = require('../models/Booking');
const router = express.Router();

// POST /api/bookings - Create booking request
router.post('/', [
  body('coordinatorId').notEmpty(),
  body('name').trim().notEmpty(),
  body('email').isEmail(),
  body('weddingDate').isISO8601(),
  body('guestNumber').isInt({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation error', errors: errors.array() });
    }

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;