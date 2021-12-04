const db = require("../models");
const Manufacturing = db.manufacturing;

// Create and Save a new manufacturing
exports.findAll = (req, res) => {
    Manufacturing.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving manufacturing."
            });
        });
};