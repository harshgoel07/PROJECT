// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProject, updateProject, deleteProject, getProjects , getProjectsByOwnerId} = require('../controllers/projectController');

// Create a new project
router.post('/', createProject);

// Update an existing project
router.put('/:projectId', updateProject);

// Delete a project
router.delete('/:projectId', deleteProject);

// Get all projects
router.get('/', getProjects);

router.get('/owner/:ownerId', getProjectsByOwnerId);

module.exports = router;
