module.exports = app => {
  const manufacture = require('../controllers/manufacture.controller.js');

  let router = require('express').Router();

  // Retrieve all manufacture
  router.get('/', manufacture.findAll);

  app.use('/api/manufacture', router);
};