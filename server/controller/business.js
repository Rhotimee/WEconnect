import Model from '../models';

const { Business } = Model;

/**
 * Business Controller.
 * @class BusinessController
 * */
export default class BusinessController {
  /**
   * Register a new business
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static register(req, res) {
    const {
      name, details, location, category
    } = req.body;
    // const { userId } = req;
    const userId = 1;

    if (!name || !details || !location || !category) {
      return res.status(400).json({
        error: true,
        message: 'some fields missing,'
      });
    }

    Business.create({
      name, details, location, category, userId,
    }).then(business => res.status(201).json({
      error: false,
      business,
    })).catch((e) => {
      console.log(userId);
      return res.status(500).json({
        error: true,
        message: e,
      });
    });
  }

  /**
   * Update a business
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static update(req, res) {

  }
  /**
   * Delete a business
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static deleteById(req, res) {

  }

  /**
   * List all businesses
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static list(req, res) {
    Business.findAll({}).then((businesses) => {
      if (!businesses) {
        return res.status(404).json({
          error: true,
          message: 'No business found'
        });
      }
      return res.status(200).json({
        error: false,
        businesses,
      });
    }).catch(e => res.status(500).json({
      error: true,
      message: e
    }));
  }
  /**
   * Get a business
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static getById(req, res) {

  }
}
