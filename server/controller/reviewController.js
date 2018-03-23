import db from '../models/dummyBusinesses';

/**
 * Business Controller.
 * @class ReviewController
 * */
export default class ReviewController {
  /**
   * Get all Reviews
   *
   * @param {object} request The request body.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static listReview(request, response) {
    const { id } = request.params;

    db.business.forEach((business) => {
      if (parseInt(id, 10) === business.id) {
        response.json({
          reviews: business.reviews,
          error: false,
        });
      }
    });
    return response.status(404).json({
      message: 'Business reviews not found',
      error: true,
    });
  }

  /**
   * Add a new Review
   *
   * @param {object} request The request body.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static addReview(request, response) {
    const { id } = request.params;
    const { reviewer, content, stars } = request.body;


    db.business.forEach((business) => {
      if (parseInt(id, 10) === business.id) {
        const reviewId = business.reviews.length + 1;
        const newReview = {
          reviewId, reviewer, content, stars
        };

        business.reviews.push(newReview);
        return response.status(201).json({
          newReview,
          error: false,
        });
      }
    });

    return response.status(404).json({
      message: 'Business Not Found',
      error: true
    });
  }
}
