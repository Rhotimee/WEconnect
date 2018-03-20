import Business from '../models-dum/dummyBusinesses';

/**
 * Middleware
 * @class Middleware
 * */
export default class Middleware {
  /**
   * Register a new business
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @param {object} next The responseponse body.
   * @returns {object} response.
   */
  static sorter(request, response, next) {
    const { location, category } = request.query;
    const hold = [];
    if (location) {
      Business.forEach((business) => {
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
      Business.forEach((business) => {
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
