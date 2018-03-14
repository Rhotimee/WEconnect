import bcrypt from 'bcrypt';
import Model from '../models';

const { User } = Model;

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
    User.findAll({})
      .then((users) => {
        if (users.length === 0) {
          return res.status(400).send({
            error: true,
            message: 'No user found'
          });
        }
        res.status(200).send({
          error: false,
          users,
        });
      }).catch((e) => {
        res.status(500).send({
          error: true,
          message: 'Server error',
          details: e,
        });
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
    const {
      email, password, firstName, lastName
    } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        message: 'Input all necessary fields',
        error: true,
      });
    }

    User.findOne({ where: { email: email.trim().toLowerCase() } })
      .then((userExists) => {
        if (userExists) {
          return res.status(400).json({
            error: true,
            message: 'Account exists for that email'
          });
        }
      });

    const hash = bcrypt.hashSync(password, 10);
    User.create({
      firstName,
      lastName,
      email: email.trim().toLowerCase(),
      password: hash,
    }).then(user => res.status(201).json({
      error: false,
      message: 'User created and logged in',
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
    })).catch(e => res.status(500).status({
      error: true,
      message: 'server error',
      details: e,
    }));
  }

  /**
   * Login
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  // static logIn(req, res) {

  // }
}
