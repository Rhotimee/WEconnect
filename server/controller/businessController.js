import db from '../models/dummyBusinesses';

/**
 * Business Controller.
 * @class BusinessController
 * */
export default class BusinessController {
  /**
   * Register a new business
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static register(request, response) {
    const {
      name, details, location, category
    } = request.body;

    if (!request.body.name) {
      return response.status(400).json({
        message: 'Business Name Missing',
        error: true
      });
    }

    const id = db.business.length + 1;
    const newBusiness = {
      id, name, details, category, location
    };
    db.business.push(newBusiness);
    return response.status(201).json({
      message: 'New Business Added',
      error: false,
      business: newBusiness,
    });
  }

  /**
   * Update a business
   *
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static update(request, response) {
    const { id } = request.params;
    let editBusiness;
    db.business.forEach((bus) => {
      if (bus.id === parseInt(id, 10)) {
        bus.name = request.body.name || bus.name;
        bus.details = request.body.details || bus.details;
        bus.location = request.body.location || bus.location;
        bus.category = request.body.category || bus.category;

        editBusiness = bus;
      }
    });
    if (editBusiness) {
      return response.status(200).json({
        message: 'Business Updated',
        error: false,
        business: editBusiness,
      });
    }
    return response.status(404).json({
      message: 'Business Not Found',
      error: true
    });
  }
  /**
   * Delete a business
   *
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static deleteById(request, response) {
    const { id } = request.params;

    db.business.forEach((bus, i) => {
      if (bus.id === parseInt(id, 10)) {
        db.business.splice(i, 1);
        return response.status(200).json({
          message: 'Business Deleted',
          error: false,
        });
      }
    });
    return response.status(404).json({
      message: 'Business Not Found',
      error: true
    });
  }

  /**
   * List all businesses
   *
   * @param {object} request The request body of the requestuest.
   * @param {object} response The respons body.
   * @returns {object} response.
   */
  static list(request, response) {
    return response.status(200).json({
      businesses: db.business,
      error: false,
    });
  }
  /**
   * Get a business
   *
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @returns {object} response.
   */
  static getById(request, response) {
    const { id } = request.params;

    db.business.forEach((business) => {
      if (parseInt(id, 10) === business.id) {
        return response.status(200).json({
          message: 'Success',
          error: false,
          business,
        });
      }
    });
    return response.status(404).json({
      message: 'Business Not Found',
      error: true
    });
  }
}
