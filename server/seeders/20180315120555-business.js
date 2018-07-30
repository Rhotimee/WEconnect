module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Businesses', [{
      userId: 1,
      name: 'Andela',
      details: 'Andela invests in Africa\'s most talented developers and integrates them into the world\'s best tech companies',
      location: 'lagos',
      category: 'Professional',
      Image: 'https://res.cloudinary.com/timi/image/upload/v1532445127/download_1.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }, {
      userId: 2,
      name: 'Flutterwave',
      details: 'Modern payments infrastructure to power Africa’s digital economy.',
      location: 'abuja',
      Image: 'https://res.cloudinary.com/timi/image/upload/v1532445129/flutterwave.png',
      category: 'Professional',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      userId: 2,
      name: 'Hotels NG',
      details: 'Modern payments infrastructure to power Africa’s digital economy.',
      location: 'lagos',
      Image: 'https://res.cloudinary.com/timi/image/upload/v1532445129/hotelsng-1.png',
      category: 'Professional',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Businesses')
};
