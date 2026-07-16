import express from "express";
import upload from "../middleware/upload.js";

import { getUpcomingEvents } from "../controllers/eventController.js";

import { getPaidEvents } from "../controllers/eventController.js";






import {
  createEvent,
  getEvents,
  getPendingEvents,
  approveEvent,
  deleteEvent,
  likeEvent,
  getApprovedEvents
  
} from "../controllers/eventController.js";

const router = express.Router();

// USER creates event (with image)
router.post("/", upload.single("image"), createEvent);

// USER dashboard → approved events
router.get("/", getEvents);

// ADMIN → pending events
router.get("/pending", getPendingEvents);

// ADMIN → approve
router.put("/approve/:id", approveEvent);

// ADMIN → delete
router.delete("/:id", deleteEvent);

router.put("/like/:id", likeEvent);

router.get("/upcoming", getUpcomingEvents);

router.get("/approved", getApprovedEvents);

router.get("/paid", getPaidEvents);

export default router;
