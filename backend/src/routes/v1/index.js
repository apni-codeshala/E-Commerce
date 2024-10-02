import express from "express";
import { signup } from "../../controllers/user.controller.js";

const router = express.Router();

// Server status
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is working properly, server is up",
    data: "Server is working properly",
    err: {},
  });
});

// User routes
router.post("/signup", signup);

export default router;
