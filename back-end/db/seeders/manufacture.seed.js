'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'manufactures',
        [
          {name: 'Taglio'},
          {name: 'Levigatura'},
          {name: 'Piallatura'},
          {name: 'Verniciatura'},
          {name: 'Sverniciatura'},
          {name: 'Assemblaggio'},
          {name: 'Fresatura'},
          {name: 'Finitura'},
          {name: 'Lucidatura'},
          {name: 'Rusticatura'},
          {name: 'Spazzolatura'}
        ],
        {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('manufactures', null, {});
  }
};