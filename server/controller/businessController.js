import db from '../models/dummy-businesses';

/**
 * Business Controller.
 * @class BusinessController
 * */
export default class BusinessController {
  /**
   * View / route
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static home(req, res) {
    res.json({
      message: 'Welocme to Weconnect',
      error: false,
    });
  }

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

    if (!req.body.name) {
      return res.status(400).json({
        message: 'Business Name Missing',
        error: true
      });
    }

    const id = db.business.length + 1;
    const newBusiness = {
      id, name, details, category, location
    };
    db.business.push(newBusiness);
    return res.status(201).json({
      message: 'New Business Added',
      error: false,
      business: newBusiness,
    });
  }
}
