import Model from '../models';

const { Business } = Model;
const { Review } = Model;

/**
 * Business Controller.
 * @class ReviewController
 * */
export default class ReviewController {
  /**
   * Get all Reviews
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static listReview(request, response) {
    Business.findById(request.params.id).then((business) => {
      if (!business) {
        return response.status(404).json({
          error: true,
          message: 'Business not found'
        });
      }
      Review.findAll({ where: { businessId: business.id } }).then((reviews) => {
        if (reviews.length === 0) {
          return response.status(404).json({
            error: true,
            message: 'No review found'
          });
        }
        return response.status(200).json({
          error: false,
          message: 'Reviews found',
          reviews,
        });
      }).catch(() => response.status(500).json({
        error: true,
        message: 'Server Error'
      }));
    });
  }

  /**
   * Add a new Review
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static addReview(request, response) {
    const { content, star } = request.body;
    const { userId } = request;
    const businessId = request.params.id;

    if (!content || !star) {
      return response.status(400).json({
        error: true,
        message: 'Input required field'
      });
    }
    Business.findById(businessId).then((business) => {
      if (!business) {
        return response.status(404).json({
          error: true,
          message: 'Business not found'
        });
      }
      // Will not allow you to review your business
      if (business.userId === userId) {
        return response.status(403).json({
          error: true,
          message: 'You cannot review your own business'
        });
      }
      // Will not allow to review a business twice
      Review.find({ where: { userId } }).then((review) => {
        if (review) {
          return response.status(403).json({
            error: true,
            message: 'You cannot review this business again'
          });
        }
      });
      Review.create({
        content, star, userId, businessId
      }).then(review => response.status(201).json({
        error: false,
        message: 'Review Created',
        review,
      })).catch(() => {
        response.status(500).json({
          error: true,
          message: 'Server Error',
        });
      });
    });
  }
}
