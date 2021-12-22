const {manufactures} = require('../../db/models');

// Create and Save a new manufacture
exports.findAll = (req, res) => {
  manufactures.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while retrieving manufacture.'
        });
      });
};