const db = require("../models");
const Commission = db.commission;

// Create and Save a new commission
exports.create = (req, res) => {
    //ToDo
};

// Retrieve all commissions from the database.
exports.findAll = (req, res) => {
    //ToDo
};

// Find a single commission with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    //ToDo
};