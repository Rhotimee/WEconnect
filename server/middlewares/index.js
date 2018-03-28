import isInt from 'validator/lib/isInt';
import jwt from 'jsonwebtoken';
import Model from '../models';


const { Business } = Model;

/**
 * Middleware
 * @class Middleware
 * */
export default class Middleware {
  /**
   * Register a new business
   *
   * @param {object} request The request body.
   * @param {object} response The response body.
   * @param {object} next Run the controller.
   * @returns {object} response.
   */
  static sorter(request, response, next) {
    const { location, category } = request.query;

    if (location) {
      Business.findAll({
        where: {
          location:
          { $ilike: `%${location}%` }
        }
      }).then((businesses) => {
        if (businesses.length === 0) {
          return response.status(404).json({
            error: true,
            message: `No business found in ${location}`
          });
        }
        return response.status(200).json({
          error: false,
          businesses,
        });
      });
    }

    if (category) {
      Business.findAll({
        where: {
          category: { $ilike: `%${category}%` }
        }
      }).then((businesses) => {
        if (businesses.length === 0) {
          return response.status(404).json({
            error: true,
            message: `No business found in ${category}`
          });
        }
        return response.status(200).json({
          error: false,
          businesses,
        });
      });
    }


    next();
  }

  /**
   * Checks if a user is logged in
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @param {object} next Passes control to next middleware
   * @returns {object} next
   */
  static isLoggedIn(request, response, next) {
    const token = request.body.token || request.query.token || request.headers['x-access-token'];
    jwt.verify(token, process.env.SALT, (err, decoded) => {
      if (err) {
        return response.status(401).json({
          error: true,
          message: 'User not logged in'
        });
      }
      request.userId = decoded.id;
      return next();
    });
  }
  /**
   * Checks if a user is logged in
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @param {object} next Passes control to next middleware
   * @returns {object} next
   */
  static validParam(request, response, next) {
    const reqId = request.params.id;
    const id = isInt(reqId);
    if (!id) {
      return response.status(400).json({
        error: true,
        message: 'Invalid params'
      });
    }
    next();
  }
}
