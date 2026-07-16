import Wallet from "../models/Wallet.js";

export const payForEvent = async (req, res) => {
  try {
    const { eventId, amount } = req.body;

    let wallet = await Wallet.findOne({ userId: req.user.id });

    // If wallet does NOT exist → create it
    if (!wallet) {
      wallet = new Wallet({
        userId: req.user.id,
        transactions: []
      });
    }

    // Add payment as a transaction
    wallet.transactions.push({
      eventId,
      amount,
      status: "paid",
      paidAt: new Date()
    });

    await wallet.save();

    res.json({ message: "Payment successful" });
  } catch (err) {
    console.error("Wallet save error:", err);
    res.status(500).json({ message: "Payment failed" });
  }
};
/* GET MY WALLET */
export const getMyWallet = async (req, res) => {
  const wallet = await Wallet.findOne({ userId: req.user.id })
    .populate("transactions.eventId");

  res.json(wallet || { transactions: [] });
};
