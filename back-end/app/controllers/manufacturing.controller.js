const db = require("../models");
const Manufacturing = db.manufacturing;

// Create and Save a new manufacturing
exports.create = (req, res) => {
    //ToDo
};

// Retrieve all manufacturing from the database.
exports.findAll = (req, res) => {
    //ToDo
};

// Find a single manufacturing with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    //ToDo
};