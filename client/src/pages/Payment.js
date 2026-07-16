import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/Payment.css";

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const event = state?.event;

  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  if (!event) {
    return <p>Invalid payment request</p>;
  }

  const handlePay = async () => {
    if (!card || !expiry || !cvv) {
      setError("All fields are required");
      return;
    }

    try {
      await API.post("/wallet/pay", {
        eventId: event._id,
        amount: event.price
      });

      alert("Payment Successful 🎉");
      navigate("/wallet");
    } catch {
      setError("Payment failed");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>

      <div className="summary">
        <p><b>Event:</b> {event.title}</p>
        <p><b>Amount:</b> ₹{event.price}</p>
      </div>

      {error && <p className="error">{error}</p>}

      <input
        placeholder="Card Number"
        maxLength="16"
        value={card}
        onChange={e => setCard(e.target.value)}
      />

      <input
        placeholder="MM/YY"
        value={expiry}
        onChange={e => setExpiry(e.target.value)}
      />

      <input
        placeholder="CVV"
        maxLength="3"
        value={cvv}
        onChange={e => setCvv(e.target.value)}
      />

      <button onClick={handlePay}>Pay ₹{event.price}</button>
    </div>
  );
}

export default Payment;
