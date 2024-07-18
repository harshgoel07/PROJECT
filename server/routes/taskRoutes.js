const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createTask, getTasks, getTaskById, updateTask, deleteTask , getTasksByOwnerId} = require('../controllers/taskController');

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/owner/:ownerId', getTasksByOwnerId);

module.exports = router;
