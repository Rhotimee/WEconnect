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
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static register(request, response) {
    const {
      name, details, location, category
    } = request.body;

    const { userId } = request;

    if (!name || !details || !location || !category) {
      return response.status(400).json({
        error: true,
        message: 'some fields missing,'
      });
    }

    Business.create({
      name, details, location, category, userId,
    }).then(business => response.status(201).json({
      error: false,
      business,
    })).catch(e => response.status(500).json({
      error: true,
      message: e,
    }));
  }

  /**
   * Update a business
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static update(request, response) {
    const {
      name, details, location, category
    } = request.body;
    Business.findById(request.params.id)
      .then((business) => {
        if (!business) {
          return response.status(404).json({
            error: true,
            message: 'Business not found'
          });
        }
        if (request.userId !== business.userId) {
          return response.status(400).json({
            error: true,
            message: 'You do not have the permission to update this business'
          });
        }
        Business.update({
          name: name || business.name,
          details: details || business.details,
          location: location || business.location,
          category: category || business.category
        }, {
          where: { id: request.params.id, },
        }).then((updatedBusiness) => {
          if (!updatedBusiness) {
            return response.status(500).json({
              error: true,
              message: 'Server error'
            });
          }
          return response.status(200).json({
            error: false,
            message: 'Business updated',
            data: updatedBusiness
          });
        });
      }).catch(() => {
        response.status(500).json({
          error: true,
          message: 'Server Error'
        });
      });
  }

  /**
   * Delete a business
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static deleteById(request, response) {
    Business.findById(request.params.id).then((business) => {
      if (!business) {
        return response.status(404).json({
          error: true,
          message: 'No business found',
        });
      }
      if (request.userId !== business.userId) {
        return response.status(400).json({
          error: true,
          message: 'You do not have the permission to delete this business'
        });
      }
      Business.destroy({
        where: { id: request.params.id }
      }).then((deleteStatus) => {
        if (!deleteStatus) {
          response.status(500).json({
            error: true,
            message: 'Unable to delete Business'
          });
        }
        return response.status(200).json({
          error: false,
          message: 'Business Deleted',
        });
      });
    });
  }

  /**
   * List all businesses
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static list(request, response) {
    const { location, category } = request.query;

    if (location) {
      Business.findAll({ where: { location } }).then((businesses) => {
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
      Business.findAll({ where: { category } }).then((businesses) => {
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

    Business.findAll({}).then((businesses) => {
      if (businesses.length === 0) {
        return response.status(404).json({
          error: true,
          message: 'No business found'
        });
      }
      return response.status(200).json({
        error: false,
        businesses,
      });
    }).catch(e => response.status(500).json({
      error: true,
      message: e
    }));
  }
  /**
   * Get a business
   *
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @returns {object} response.
   */
  static getById(request, response) {
    Business.findById(request.params.id).then((business) => {
      if (!business) {
        return response.status(404).json({
          error: true,
          message: 'No business found',
        });
      }
      return response.status(200).json({
        error: false,
        business,
      });
    }).catch(() => response.status(500).json({
      error: true,
      message: 'Server error'
    }));
  }
}
