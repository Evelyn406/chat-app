import express from "express";
const router = express.Router();
import { sendMessage, getMessages } from "../controllers/messageControllers.js";
import protectRoute from "../middleware/protectRoute.js";

// protect the route before running the sendMessage function to check if user logged in
router.post("/send/:id", protectRoute, sendMessage);

router.get("/:id", protectRoute, getMessages);

export default router;