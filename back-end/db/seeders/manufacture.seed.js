'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'manufactures',
        [
          {name: 'Cutting'},
          {name: 'Sanding'},
          {name: 'Planing'},
          {name: 'Painting'},
          {name: 'Stripping'},
          {name: 'Assembly'},
          {name: 'Milling'},
          {name: 'Finishing'},
          {name: 'Polishing'},
          {name: 'Rustication'},
          {name: 'Brushing'}
        ],
        {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('manufactures', null, {});
  }
};