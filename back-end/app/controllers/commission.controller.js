const db = require("../models");
const Commission = db.commission;

// Retrieve all commissions from the database.
exports.findAll = (req, res) => {
    Commission.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving commissions."
            });
        });
};
