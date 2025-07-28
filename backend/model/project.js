const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Storing image as URL
      required: true,
    },
    tech: {
      type: [String], // Array of tech stack like ["React", "MongoDB"]
      default: [],
    },
    liveLink: {
      type: String,
    },
    codeLink: {
      type: String,
    },
    projectType:{
      type: String,
    },
    live:{
      type:Boolean, default:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
