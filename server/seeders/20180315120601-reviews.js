module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Reviews', [{
    userId: 1,
    businessId: 1,
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, et!',
    star: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }, {
    userId: 2,
    businessId: 2,
    content: 'Lorem ipsum dolor sit amet.',
    star: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Reviews')
};
