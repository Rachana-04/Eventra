import express from "express";
import { getWallet, payForEvent } from "../controllers/walletController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getWallet);
router.post("/pay", auth, payForEvent);

export default router;
