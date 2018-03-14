module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    }
  });
  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foriegnKey: 'userId',
      onDelete: 'CASCADE'
    });
    Review.belongsTo(models.Business, {
      foriegnKey: 'businessId',
      onDelete: 'CASCADE'
    });
  };
  return Review;
};
