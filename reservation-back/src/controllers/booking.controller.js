const Booking = require('../models/booking.model');

const bookingController = {
  getAll: async(req, res) => {
   const bookings = await Booking.find();
    res.send(bookings)
  },
  getOne: async (req, res) => {
   const {id } = req.params;
    try {
      const booking = await Booking.findById(id);
      res.send(booking);
    } catch (error) {
      res.status(404).send({ message: "Booking not found" });
    }
  },
  create: async (req, res) => {
    try {
      const booking = await Booking.create(req.body);
      res.send(booking);
    } catch (error) {
      res.status(400).send({ message: "Booking not created" });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findByIdAndUpdate(id, req.body);
      res.send(booking);
    } catch (error) {
      res.status(400).send({ message: "Booking not updated" });
    }
  },
  delete: async(req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findByIdAndDelete(id);
      res.send(booking);
    } catch (error) {
      res.status(400).send({ message: "Booking not deleted" });
    }
  }
}
module.exports = bookingController;