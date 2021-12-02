//Adds on: pagination -> tutorial: https://www.bezkoder.com/node-js-sequelize-pagination-mysql/

const db = require("../models");
const Activity = db.activity;
//const Op = db.Sequelize.Op;

// Create and Save a new Activity
exports.create = (req, res) => {

    // Validate request
    if (!(
        //req.body.idUser && req.body.idCommission && req.body.idManufacturing &&
        req.body.date && req.body.time)) {
        res.status(400).send({
            message: "Content can not be empty! req: "+req.body.toString()
        });
        return;
    }

    // Create a Activity
    const activity = {
        idUser: -1,
        idCommission: -1,
        idManufacturing: -1,
        date: req.body.date,
        notes: req.body.notes,
        time: req.body.time
    };

    console.log('Adding new activity: ');
    console.log(activity);

    // Save Activity in the database
    Activity.create(activity)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Activity."
            });
        });
};


// Retrieve all Activities from the database.
exports.findAll = (req, res) => {
    Activity.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving activities."
            });
        });
};


// Find a single Activity with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Activity.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Activity with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Activity with id=" + id
            });
        });
};


// Update a Activity by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    // Updated Activity
    const activity = {
        notes: req.body.notes
    };

    Activity.update(activity, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Activity was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Activity with id=${id}. Maybe Activity was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Activity with id=" + id
            });
        });
};


// Delete a Activity with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Activity.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Activity was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Activity with id=" + id
            });
        });
};


// Find all Activities from one commission
exports.findAllFromCommission = (req, res) => {
    const idCommission = req.query.idCommission;

    console.log(idCommission);

    Activity.findAll({ where: { idCommission: idCommission } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving activities."
            });
        });
};