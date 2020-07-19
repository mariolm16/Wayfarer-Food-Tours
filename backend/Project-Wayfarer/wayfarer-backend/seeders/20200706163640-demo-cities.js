'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [
      {
        name:'San Francisco',
        img: 'https://img.static-af.com/images/meta/IDname/CITY-SFO-1?aspect_ratio=2:1&max_width=1920',
        state: 'CA',
        country: 'USA'
      },
      {
        name:'New York',
        img: 'https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg',
        state: 'NY',
        country: 'USA'
      },
      {
        name:'Sydney',
        img: 'https://lp-cms-production.imgix.net/2019-06/65830387.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
        state: 'NSW',
        country: 'Australia'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
