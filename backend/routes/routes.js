const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  deleteProject,
  formDetailsEmail,
} = require("../controller/controller");

router.post("/add-project", createProject);
router.get("/get-projects", getAllProjects);

// Optional
router.get("/getprojectid/:id", getProjectById);
router.delete("/delete-project/:id", deleteProject);
router.post("/contact",formDetailsEmail)

module.exports = router;
