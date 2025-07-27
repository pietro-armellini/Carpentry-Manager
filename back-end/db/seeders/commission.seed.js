'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'commissions',
        [
          {name: 'Benches Sant\'Anna Park'},
          {name: 'Bella Vista Refuge Kitchen'},
          {name: 'SAT 64 Trail Fence'},
          {name: 'S. Perotti Elementary School Lecterns'},
          {name: 'DISI Desks'},
          {name: 'Giovannini Roof'}
        ],
        {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('commissions', null, {});
  }
};