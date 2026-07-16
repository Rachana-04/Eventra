import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true   // ONE wallet per user
  },
  transactions: [
    {
      eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
      },
      amount: Number,
      status: String,
      paidAt: Date
    }
  ]
});

export default mongoose.model("Wallet", walletSchema);
