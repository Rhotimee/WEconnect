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
  static list(req, res) {
    return res.status(200).json({
      businesses: db.users,
      error: false,
    });
  }
  /**
   * Signup
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static signUp(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Input Both Username and Password',
        error: true,
      });
    }
    db.users.push(req.body);
    return res.status(201).json({
      message: 'User Created Successfully',
      error: false,
    });
  }
}
