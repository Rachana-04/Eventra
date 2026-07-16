import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/Dashboard.css";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/events")
      .then(res => setEvents(res.data))
      .catch(console.error);
  }, []);

  const likeEvent = async (id) => {
    const res = await API.put(`/events/like/${id}`);
    setEvents(prev =>
      prev.map(e => (e._id === id ? { ...e, likes: res.data.likes } : e))
    );
  };

  return (
    <div className="dashboard">
      <h2>Approved Events</h2>

      <div className="event-grid">
        {events.map(event => (
          <div className="event-card" key={event._id}>
            {event.image && (
              <img
                src={`http://localhost:5000/uploads/${event.image}`}
                alt={event.title}
              />
            )}

            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>{event.date} | {event.time}</p>

              {/* Pay button ONLY for paid events */}
              {event.price > 0 && (
                <button
                  className="pay-btn"
                  onClick={() =>
                    navigate("/payment", { state: { event } })
                  }
                >
                  Pay Now ₹{event.price}
                </button>
              )}

              <button onClick={() => likeEvent(event._id)}>
                ❤️ {event.likes ?? 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
