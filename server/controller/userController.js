import db from '../models/dummyUsers';

/**
 * Business Controller.
 * @class BusinessController
 * */
export default class UserController {
  /**
   * List all users
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */

  /**
   * List all users
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static list(req, res) {
    return res.status(200).json({
      businesses: db.users,
      error: false,
    });
  }
}
