const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Registration = require("../models/Registration");
const Admin = require("../models/Admin");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

/* ================================= */
/* 🔐 LOGIN ROUTE */
/* ================================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

/* ================================= */
/* 🔒 AUTH MIDDLEWARE */
/* ================================= */
const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Access Denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.admin = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

/* ================================= */
/* 📋 GET REGISTRATIONS */
/* ================================= */
router.get("/registrations", adminAuth, async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: registrations.length,
      data: registrations,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

/* ================================= */
/* 📩 EMAIL CONFIGURATION */
/* ================================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================================= */
/* 🔐 APPROVE PAYMENT */
/* ================================= */
router.post("/approve-payment", adminAuth, async (req, res) => {
  try {
    const { registrationId } = req.body;

    const registration = await Registration.findById(registrationId);

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: "Registration not found",
      });
    }

    if (registration.paymentStatus?.toLowerCase() === "completed") {
      return res.status(400).json({
        success: false,
        message: "Payment already approved",
      });
    }

    // ✅ Update status
    registration.paymentStatus = "completed";
    await registration.save();

    // ✅ Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: registration.leader.email,
      subject: "🎉 CODEFIESTA Registration Completed",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Hello ${registration.leader.name},</h2>

          <p>Congratulations! 🎉</p>

          <p>Your payment has been verified by the admin.</p>

          <p><strong>Your registration is now COMPLETED.</strong></p>

          <hr/>

          <h3>Team Details:</h3>
          <ul>
            <li><strong>Team Name:</strong> ${registration.teamName}</li>
            <li><strong>College:</strong> ${registration.leader.college}</li>
          </ul>

          <p>You are officially registered for CODEFIESTA 🚀</p>

          <br/>
          <p>We look forward to seeing you at the event.</p>

          <br/>
          <p>— CODEFIESTA Team</p>
        </div>
      `,
    });

    console.log("✅ Email sent to:", registration.leader.email);

    res.json({
      success: true,
      message: "Payment approved and email sent",
    });

  } catch (error) {
    console.error("Approve Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
