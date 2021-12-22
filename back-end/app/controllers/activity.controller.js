// Adds on: pagination -> tutorial:
// https://www.bezkoder.com/node-js-sequelize-pagination-mysql/

const {activities, commissions, manufactures} = require('../../db/models');

// Create and Save a new Activity
exports.create = async (req, res) => {
  // Request not empty
  if (!(typeof req.body.commissionName !== 'undefined' &&
        typeof req.body.manufactureName !== 'undefined' &&
        typeof req.body.date !== 'undefined' &&
        typeof req.body.time !== 'undefined' &&
        typeof req.body.notes !== 'undefined')) {
    res.status(400).send({
      message: `Content can not be empty! req: {
             commissionName: ${req.body.commissionName},
             manufactureName: ${req.body.manufactureName}, 
             date: ${req.body.date}, 
             time: ${req.body.time}, 
             notes: ${req.body.notes}`
    });
    return;
  }

  // Validate request
  if (isNaN(Date.parse(req.body.date))
      || isNaN(req.body.time)
      || parseInt(req.body.time) <= 0
      || typeof req.body.notes !== 'string') {
    res.status(400).send({
      message:
          'Content with wrong value: date must be a valid date, time an integer greater than 0, and notes a string'
    });
    return;
  }

  // Check if commissionName and manufactureName exist
  let foundCommission = null, foundManufacture = null;
  try {
    foundCommission = await commissions.findByPk(req.body.commissionName);
    foundManufacture = await manufactures.findByPk(req.body.manufactureName);
  } catch (err) {
    res.status(500).send({
      message: err.message ||
          'Some error occurred while retrieving commissions or manufactures.'
    });
    return;
  }
  if (!foundCommission || !foundManufacture) {
    res.status(404).send({
      message: `Cannot find Commission with name=${
          req.body.commissionName} or Manufacture with name=${
          req.body.manufactureName}.`
    });
  } else {
    // creating the activity
    const newActivity = {
      commissionName: req.body.commissionName,
      manufactureName: req.body.manufactureName,
      date: req.body.date,
      notes: req.body.notes,
      time: req.body.time
    };

    try {
      const data = await activities.create(newActivity);
      res.status(201).send(data);
    } catch (err) {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while creating the Activity.'
      });
    }
  }
};


// Retrieve all Activities from the database.
exports.findAll = (req, res) => {
  activities.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while retrieving activities.'
        });
      });
};


// Find a single Activity with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  activities.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send(
              {message: `Cannot find Activity with id=${id}.`});
        }
      })
      .catch(err => {
        res.status(500).send(
            {message: 'Error retrieving Activity with id=' + id});
      });
};


// Update an Activity by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  if (typeof req.body.notes !== 'string') {
    res.status(400).send({message: 'Empty notes field'})
    return;
  }

  // Updated Activity
  const updatedActivity = {notes: req.body.notes};

  activities.update(updatedActivity, {where: {id: id}})
      .then(num => {
        if (num == 1) {
          res.send({message: 'Activity was updated successfully.'});
        } else {
          res.status(404).send({
            message: `Cannot update Activity with id=${
                id}. Maybe Activity was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send(
            {message: 'Error updating Activity with id=' + id});
      });
};


// Delete a Activity with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  activities.destroy({where: {id: id}})
      .then(num => {
        if (num == 1) {
          res.send({message: 'Activity was deleted successfully!'});
        } else {
          res.status(404).send({
            message: `Cannot delete Activity with id=${
                id}. Maybe Activity was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send(
            {message: 'Could not delete Activity with id=' + id});
      });
};


// Find all Activities from one commission
exports.findAllFromCommission = async (req, res) => {
  if (!req.query.commissionName) {
    res.status(400).send({message: 'Empty commission name'})
    return;
  }

  const commissionName = req.query.commissionName;
  let found = null;
  try {
    found = await commissions.findByPk(commissionName);
  } catch (err) {
    res.status(500).send({
      message:
          err.message || 'Some error occurred while retrieving manufactures.'
    });
    return;
  }

  if (!found) {
    res.status(404).send(
        {message: `Cannot find Commission with name=${commissionName}.`});
  } else {
    try {
      const data =
          await activities.findAll({where: {commissionName: commissionName}});
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving activities.'
      });
    }
  }
};