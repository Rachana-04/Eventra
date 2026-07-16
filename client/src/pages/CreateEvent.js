import { useState } from "react";
import API from "../api";
import "../styles/CreateEvent.css";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    organizedBy: "",
    isPaid: "false",
    ticketPrice: "",
  });

  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("Event image is required");
      return;
    }

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    data.append("image", image);

    try {
      await API.post("/events", data);
       alert("Event submitted successfully! Waiting for admin approval.");
      navigate("/dashboard");
    } catch (err) {
      setError("Error creating event");
    }
  };

  return (
    <div className="create-event">
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        {error && <p className="error">{error}</p>}

        <input name="title" placeholder="Event Title" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <input type="time" name="time" onChange={handleChange} />

        <textarea
          name="description"
          placeholder="Event Description"
          onChange={handleChange}
        />

        <input
          name="organizedBy"
          placeholder="Organized By"
          onChange={handleChange}
        />

        <select name="isPaid" onChange={handleChange}>
          <option value="false">Free Event</option>
          <option value="true">Paid Event</option>
        </select>

        {form.isPaid === "true" && (
          <input
            type="number"
            name="ticketPrice"
            placeholder="Ticket Price ₹"
            onChange={handleChange}
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Create Event</button>
       
      </form>
    </div>
  );
}

export default CreateEvent;
