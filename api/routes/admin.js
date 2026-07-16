import express from "express";
import Event from "../models/Event.js";
import authMiddleware from "../middleware/auth.js";
import adminMiddleware from "../middleware/admin.js";

const router = express.Router();

// Get all events (even unapproved)
router.get("/events", authMiddleware, adminMiddleware, async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Approve event
router.put("/approve/:id", authMiddleware, adminMiddleware, async (req, res) => {
  await Event.findByIdAndUpdate(req.params.id, { approved: true });
  res.json({ msg: "Event approved" });
});

// Delete event
router.delete("/event/:id", authMiddleware, adminMiddleware, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: "Event deleted" });
});

export default router;
