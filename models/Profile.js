const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  playingAge: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String,
  },
  agent: {
    agentName: { type: String },
    agency: { type: String },
    agentEmail: { type: String },
    agentPhone: { type: String },
    agentLocation: { type: String },
  },
  experience: [
    {
      role: {
        type: String,
      },
      production: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      description: {
        type: String,
      },
    },
  ],
  training: [
    {
      school: {
        type: String,
      },
      subject: {
        type: String,
      },
      level: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
      },
      description: {
        type: String,
      },
    },
  ],
  contact: {
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
