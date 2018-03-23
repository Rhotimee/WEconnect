import db from '../models/dummyUsers';

/**
 * Business Controller.
 * @class BusinessController
 * */
export default class UserController {
  /**
   * List all users
   *
   * @param {object} request The request body of the request.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static list(request, response) {
    return response.status(200).json({
      businesses: db.users,
      error: false,
    });
  }
  /**
   * Signup
   *
   * @param {object} request The request body of the request.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static signUp(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        message: 'Input Both Username and Password',
        error: true,
      });
    }

    db.users.forEach((user) => {
      if (user.email === email) {
        return response.status(400).json({
          message: 'A user with that email already exists',
          error: true,
        });
      }
    });

    db.users.push(request.body);
    return response.status(201).json({
      message: 'User Created Successfully',
      error: false,
    });
  }

  /**
   * Login
   *
   * @param {object} request The request body of the request.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static logIn(request, response) {
    const { email, password } = request.body;
    db.users.forEach((user) => {
      if (email === user.email && password === user.password) {
        return response.status(200).json({
          message: 'Logged in successfully',
          error: false,
        });
      }
    });
    return response.status(400).json({
      message: 'Unable to Log in',
      error: true,
    });
  }
}
