import db from '../models/dummyBusinesses';
/**
 * Middleware
 * @class Middleware
 * */
export default class Middleware {
  /**
   * Register a new business
   *
   * @param {object} request The request body of the request.
   * @param {object} response The response body.
   * @param {object} next The response body.
   * @returns {object} response.
   */
  static sorter(request, response, next) {
    const { location, category } = request.query;
    const hold = [];
    if (location) {
      db.business.forEach((business) => {
        if (business.location.toLowerCase() === location.toLowerCase()) {
          hold.push(business);
        }
      });
      if (hold.length === 0) {
        return response.status(404).json({
          message: 'There is no business in that location yet',
          error: true
        });
      }
      return response.status(200).json(hold);
    }
    if (category) {
      db.business.forEach((business) => {
        if (business.category.toLowerCase() === category.toLowerCase()) {
          hold.push(business);
        }
      });
      if (hold.length === 0) {
        return response.status(404).json({
          message: 'There is no business that category yet',
          error: true
        });
      }
      return response.status(200).json(hold);
    }
    next();
  }
}
