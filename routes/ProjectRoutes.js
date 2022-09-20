const express = require('express');
const {createProject } = require('../controllers/ProjectController');

const router = express.Router()

router.post('/', createProject)

module.exports = router;