
//const mongoose = require('mongoose');
const ProjectModel = require('../models/ProjectModel');

// Create  a project for an artist
const createProject = async (req, res) => {
    const project = req.body
    const newProject = new ProjectModel(project)
    try {
        await newProject.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(409).json(error.message)
    }

}

// Get all projects
const getProjects = async (req, res) => { 
    try {
        const projects = await ProjectModel.find().sort({ _id: -1 });

        res.json({ data: projects});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    createProject,
    getProjects
  };
