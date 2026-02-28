
const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");
router.post("/new", async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);

        const saved = await newRegistration.save();

        res.status(201).json({
            success: true,
            registrationId: saved._id,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});

module.exports = router;
