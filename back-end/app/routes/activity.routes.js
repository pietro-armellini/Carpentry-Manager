module.exports = app => {
  const activities = require('../controllers/activity.controller.js');

  let router = require('express').Router();

  // Create a new Activity
  router.post('/', activities.create);

  // Retrieve all Activities
  router.get('/', activities.findAll);

  // Retrieve all Activities matching commissionName
  router.get('/byCommissionName', activities.findAllFromCommission);

  // Retrieve a single Activity with id
  router.get('/:id', activities.findOne);

  // Update a Activity with id
  router.put('/:id', activities.update);

  // Delete a Activity with id
  router.delete('/:id', activities.delete);

  app.use('/api/activities', router);
};