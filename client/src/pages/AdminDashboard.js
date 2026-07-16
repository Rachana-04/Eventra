import { useEffect, useState } from "react";
import API from "../api";
import "../styles/AdminDashboard.css";


function AdminDashboard() {
  const [pendingEvents, setPendingEvents] = useState([]);
  const [approvedEvents, setApprovedEvents] = useState([]);

  useEffect(() => {
    API.get("/events/pending").then(res => setPendingEvents(res.data));
    API.get("/events/approved").then(res => setApprovedEvents(res.data));
  }, []);

  const approve = async (id) => {
    await API.put(`/events/approve/${id}`);
    setPendingEvents(pendingEvents.filter(e => e._id !== id));
    const approved = pendingEvents.find(e => e._id === id);
    setApprovedEvents([...approvedEvents, { ...approved, isApproved: true }]);
  };

  const deleteEvent = async (id) => {
    await API.delete(`/events/${id}`);
    setPendingEvents(pendingEvents.filter(e => e._id !== id));
    setApprovedEvents(approvedEvents.filter(e => e._id !== id));
  };

  return (
    <div className="admin-container">
  <h2>Admin Dashboard</h2>

  <h3 className="section-title">Pending Events</h3>
  {pendingEvents.length === 0 && <p>No pending events</p>}

  {pendingEvents.map(event => (
    <div className="event-card" key={event._id}>
      {event.image && (
        <img
          src={`http://localhost:5000/uploads/${event.image}`}
          alt={event.title}
        />
      )}

      <div className="event-details">
        <h4>{event.title}</h4>
        <p>{event.description}</p>
        <div className="event-meta">
          {event.date} | {event.time} <br />
          {event.price > 0 ? `Paid ₹${event.price}` : "Free Event"}
        </div>

        <div className="event-actions">
          <button className="approve-btn" onClick={() => approve(event._id)}>
            Approve
          </button>
          <button className="delete-btn" onClick={() => deleteEvent(event._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}

  <h3 className="section-title">Approved Events</h3>
  {approvedEvents.length === 0 && <p>No approved events</p>}

  {approvedEvents.map(event => (
    <div className="event-card" key={event._id}>
      <div className="event-details">
        <strong>{event.title}</strong>
        <div className="event-meta">
          {event.date} | {event.time}
        </div>
      </div>
    </div>
  ))}
</div>

  );
}

export default AdminDashboard;
