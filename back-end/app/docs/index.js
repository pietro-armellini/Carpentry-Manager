module.exports = app => {
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('./swagger.json');

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get('/', (req, res) => res.redirect('/api-docs'));
  app.get('/api/docs', (req, res) => res.redirect('/api-docs'));
};