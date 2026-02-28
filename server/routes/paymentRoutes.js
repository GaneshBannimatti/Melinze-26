const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

/* ============================= */
/* 💳 UPDATE PAYMENT */
/* ============================= */

router.post("/update-payment", async (req, res) => {
  try {
    const { registrationId, utrNumber } = req.body;

    if (!registrationId || !utrNumber) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // 🔎 Check duplicate UTR
    const existingUTR = await Registration.findOne({ utrNumber });

    if (existingUTR) {
      return res.status(400).json({
        success: false,
        message: "This UTR number is already used",
      });
    }

    // 🔄 Update payment status to pending
    const updated = await Registration.findByIdAndUpdate(
      registrationId,
      {
        utrNumber,
        paymentStatus: "pending",
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Registration not found",
      });
    }

    res.json({
      success: true,
      message: "Payment submitted. Awaiting admin approval.",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
