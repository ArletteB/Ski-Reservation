const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

router.get('/bookings', bookingController.getAll);
router.get('/bookings/:id', bookingController.getOne);
router.post('/bookings', bookingController.create);
router.put('/bookings/:id', bookingController.update);
router.delete('/bookings/:id', bookingController.delete);

module.exports = router;