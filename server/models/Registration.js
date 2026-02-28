
const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const registrationSchema = new mongoose.Schema(
  {
    teamName: { type: String, required: true },

    leader: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      dob: { type: String },
      location: { type: String },
      type: { type: String },
      college: { type: String, required: true },   // ✅ ADD THIS
    },


    participant2: { type: participantSchema, required: true },
    participant3: participantSchema,
    participant4: participantSchema,

    paymentStatus: {
      type: String,
      default: "pending",
    },

    utrNumber: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registration", registrationSchema);
