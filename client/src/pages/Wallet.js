import { useEffect, useState } from "react";
import API from "../api";

function Wallet() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    API.get("/wallet/me")
      .then(res => setWallet(res.data))
      .catch(console.error);
  }, []);

  if (!wallet || wallet.transactions.length === 0) {
    return <h3 style={{ padding: "20px" }}>No payments yet</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Wallet 💳</h2>

      {wallet.transactions.map((tx, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "6px"
          }}
        >
          <h4>{tx.eventId?.title}</h4>
          <p>Amount: ₹{tx.amount}</p>
          <p>Status: {tx.status}</p>
          <p>
            Paid on: {new Date(tx.paidAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Wallet;
