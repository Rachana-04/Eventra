import Event from "../models/Event.js";

// CREATE EVENT (USER)
export const createEvent = async (req, res) => {
  const {
    title,
    date,
    time,
    description,
    organizedBy,
    isPaid,
    ticketPrice
  } = req.body;

  const event = new Event({
    title,
    date,
    time,
    description,
    organizedBy,
    isPaid: isPaid === "true",
    price: isPaid === "true" ? Number(ticketPrice) : 0,
    image: req.file?.filename,
    isApproved: false
  });

  await event.save();
  res.json(event);
};

// USER → only approved events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ isApproved: true });
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching events" });
  }
};

// ADMIN → pending events
export const getPendingEvents = async (req, res) => {
  try {
    const events = await Event.find({ isApproved: false });
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching pending events" });
  }
};

// ADMIN → approve event
export const approveEvent = async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, { isApproved: true });
    res.json({ msg: "Event approved" });
  } catch (err) {
    res.status(500).json({ msg: "Approval failed" });
  }
};

// ADMIN → delete event
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ msg: "Event deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Delete failed" });
  }
};

// USER → like event
export const likeEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    event.likes += 1;
    await event.save();

    res.json({ likes: event.likes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Like failed" });
  }
};

// 🔔 UPCOMING EVENTS (for bell)
export const getUpcomingEvents = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const events = await Event.find({
      isApproved: true,
      date: { $gte: today }
    }).sort({ date: 1 });

    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching upcoming events" });
  }
};

// ADMIN → approved events
export const getApprovedEvents = async (req, res) => {
  try {
    const events = await Event.find({ isApproved: true });
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching approved events" });
  }
};

// USER → paid events only (wallet)
export const getPaidEvents = async (req, res) => {
  try {
    const events = await Event.find({
      isApproved: true,
      price: { $gt: 0 }
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching paid events" });
  }
};


