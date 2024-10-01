import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is working properly",
    data: "Server is working properly",
    err: {},
  });
});

export default router;
