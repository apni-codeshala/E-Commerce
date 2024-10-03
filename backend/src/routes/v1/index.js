import express from "express";

import isAuthenticated from "../../middlewares/auth.validator.js";
import {
  signup,
  otpVerification,
  generateNewOTP,
  signin,
  isVerified,
} from "../../controllers/user.controller.js";

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
router.post("/otp-verification", otpVerification); // this will return token with him
router.post("/gen-new-otp", generateNewOTP);
router.post("/signin", signin);
router.get("/isverified", isAuthenticated, isVerified);

export default router;
