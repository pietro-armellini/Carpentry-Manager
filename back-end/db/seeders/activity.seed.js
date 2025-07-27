'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'activities',
        [
          {
            commissionName: 'Benches Sant\'Anna Park',
            manufactureName: 'Painting',
            date: '2021-12-01',
            notes: 'The benches were painted with white wood stain',
            time: 120
          },
          {
            commissionName: 'Bella Vista Refuge Kitchen',
            manufactureName: 'Assembly',
            date: '2021-12-05',
            notes: 'Four cabinets were assembled',
            time: 70
          },
          {
            commissionName: 'SAT 64 Trail Fence',
            manufactureName: 'Sanding',
            date: '2021-12-12',
            notes: 'Sandpaper with 120 grit was used',
            time: 60
          },
          {
            commissionName: 'S. Perotti Elementary School Lecterns',
            manufactureName: 'Polishing',
            date: '2021-12-20',
            notes: 'Five lecterns were polished',
            time: 10
          },
          {
            commissionName: 'DISI Desks',
            manufactureName: 'Cutting',
            date: '2021-12-03',
            notes: 'The cut was made with a 34-tooth blade',
            time: 45
          },
          {
            commissionName: 'Bella Vista Refuge Kitchen',
            manufactureName: 'Finishing',
            date: '2021-12-09',
            notes: 'The countertop edge was installed',
            time: 35
          },
          {
            commissionName: 'Giovannini Roof',
            manufactureName: 'Planing',
            date: '2021-12-26',
            notes: '15 beams were planed',
            time: 200
          }
        ],
        {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('activities', null, {});
  }
};
