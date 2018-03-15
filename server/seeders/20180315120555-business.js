module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Businesses', [{
      userId: 1,
      name: 'lorem Business',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos aliquam deserunt nesciunt ducimus',
      location: 'lagos',
      category: 'Ict',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }, {
      userId: 2,
      name: 'ipsum Business',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos aliquam deserunt nesciunt ducimus',
      location: 'abuja',
      category: 'finance',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Businesses')
};
