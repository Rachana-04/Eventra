import express from "express";
import { getMyWallet, payForEvent } from "../controllers/walletController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// logged-in user wallet
router.get("/me", authMiddleware, getMyWallet);

// pay for event
router.post("/pay", authMiddleware, payForEvent);

export default router;
