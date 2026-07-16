import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    time: String,
    description: String,
    organizedBy: String,
    image: String,
    price: {
      type: Number,
      default: 0
    },
    isPaid: {
  type: Boolean,
  default: false
},
    likes: {
      type: Number,
      default: 0   // ❤️ ADD THIS
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
