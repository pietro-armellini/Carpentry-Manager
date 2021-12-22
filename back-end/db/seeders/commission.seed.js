'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'commissions',
        [
          {name: 'Panchine parco Sant\'Anna'},
          {name: 'Cucina rifugio Bella Vista'},
          {name: 'Staccionata sentiero SAT 64'},
          {name: 'Leggii scuola elementare S. Perotti'},
          {name: 'Banchi DISI'},
          {name: 'Tetto Giovannini'}
        ],
        {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('commissions', null, {});
  }
};