const {commissions} = require('../../db/models');

// Retrieve all commissions from the database.
exports.findAll = (req, res) => {
  commissions.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while retrieving commissions.'
        });
      });
};
