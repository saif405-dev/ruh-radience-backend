const Appointment = require("../models/Appointment");
const getAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: appointments.length,
      data: appointments,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

};

// Create Appointment
const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, date, time, message } = req.body;

    if (!name || !email || !phone || !date) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const appointment = await Appointment.create({
      name,
      email,
      phone,
      date,
      time,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      data: appointment,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

module.exports = {
    createAppointment,
    getAppointments

};
// Get All Appointments

