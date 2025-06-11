const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.post('/sell', async (req, res) => {
  const {
    carNumber,
    carModel,
    carType,
    engineType,
    manufacturingYear,
    desiredSellingDate,
  } = req.body;

  if (
    !carNumber ||
    !carModel ||
    !carType ||
    !engineType ||
    !manufacturingYear ||
    !desiredSellingDate
  ) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check for duplicate carNumber
    const existingCar = await Car.findOne({ carNumber });
    if (existingCar) {
      return res.status(409).json({ message: 'Car with this number already exists.' });
    }

    const newCarEntry = await Car.create({
      carNumber,
      carModel,
      carType,
      engineType,
      manufacturingYear,
      desiredSellingDate,
    });

    return res.status(201).json({
      message: 'Car details submitted successfully.',
      data: newCarEntry,
    });
  } catch (err) {
    console.error('Error submitting car details:', err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
