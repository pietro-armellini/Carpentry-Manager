const {manufacturings} = require('../../db/models');

// Create and Save a new manufacturing
exports.findAll = (req, res) => {
    manufacturings.findAll()
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