import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import API from "../api";

function Notifications() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events/upcoming")
      .then(res => setEvents(res.data))
      .catch(console.error);
  }, []);

  const calendarEvents = events.map(e => ({
    title: e.title,
    start: `${e.date}T${e.time}`
  }));

 const renderEventContent = (eventInfo) => {
  return (
    <div
      style={{
        backgroundColor: "#2563eb",   // blue background
        color: "white",
        padding: "4px 6px",
        borderRadius: "6px",
        fontSize: "16px",
        lineHeight: "1.2"
      }}
    >
      <div style={{ fontWeight: "600" }}>
        {eventInfo.timeText}
      </div>
      <div style={{ fontWeight: "700" }}>
        {eventInfo.event.title}
      </div>
    </div>
  );
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Calendar 🔔</h2>

      

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        eventContent={renderEventContent} 
        height="auto"
      />
    </div>
  );
}

export default Notifications;
