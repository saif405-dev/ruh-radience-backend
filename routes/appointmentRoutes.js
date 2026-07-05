const express = require("express");
const router = express.Router();

const { createAppointment,  getAppointments, deleteAppointment, updateAppointment
} = require("../controllers/appointmentController");

  router.post("/", createAppointment);
  router.get("/", getAppointments);
  // Update Appointment
  router.put("/:id", updateAppointment);

  // Delete Appointment
  router.delete("/:id", deleteAppointment);

module.exports = router;