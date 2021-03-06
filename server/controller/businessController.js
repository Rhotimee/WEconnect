import Model from '../models';

const { Business, User, Review } = Model;

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
      name, details, location, category, Image
    } = request.body;

    const { userId } = request;

    if (!name || !details || !location || !category) {
      return response.status(400).json({
        error: true,
        message: 'Some fields missing'
      });
    }

    if (name.trim() === '' || details.trim() === '' || location.trim() === '' || category.trim() === '') {
      return response.status(400).json({
        message: 'Enter Valid Input',
        error: true,
      });
    }

    // Check if business name already exists
    Business.find({ where: { name } }).then((business) => {
      if (business) {
        return response.status(409).json({
          error: true,
          message: 'Business name already exists',
        });
      }

      // Create the business
      Business.create({
        name, details, location, category, userId, Image
      }).then(business => response.status(201).json({
        error: false,
        message: 'Business Created',
        business,
      }));
    }).catch((error) => {
      response.status(500).json({
        error,
        message: 'Server Error',
      });
    });
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
      name, details, location, category, Image
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
          return response.status(401).json({
            error: true,
            message: 'You do not have the permission to update this business'
          });
        }

        if (details.trim() === '' || location.trim() === '' || category.trim() === '') {
          return response.status(400).json({
            message: 'Enter Valid Input',
            error: true,
          });
        }

        // Update the business
        business.update({
          name: name || business.name,
          details: details || business.details,
          location: location || business.location,
          category: category || business.category,
          Image: Image || business.Image,
        }).then((updateBusiness) => {
          if (updateBusiness) {
            return response.status(200).json({
              error: false,
              message: 'Business updated',
              business: updateBusiness,
            });
          }
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
          message: 'Business not found',
        });
      }
      if (request.userId !== business.userId) {
        return response.status(401).json({
          error: true,
          message: 'You do not have the permission to delete this business'
        });
      }
      business.destroy().then((deleteStatus) => {
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
    const { page } = request.params;
    const limit = 5; // number of businesses per page
    const offset = limit * (page - 1);

    Business.findAndCountAll({
      order: [['createdAt', 'DESC']],
      limit,
      offset,
      include: [{
        model: Review,
        as: 'reviews',
        attributes: ['star']
      }]
    }).then((businesses) => {
      const pages = Math.ceil(businesses.count / limit);
      if (businesses.length === 0 || page > pages) {
        return response.status(404).json({
          error: true,
          message: 'No business found',
          pagination: {
            pages,
            page
          }
        });
      }

      return response.status(200).json({
        error: false,
        message: 'Businesses Found',
        businesses,
        pagination: {
          pages,
          page
        }
      });
    }).catch(() => response.status(500).json({
      error: true,
      message: 'Server Error'
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
    Business.findOne({
      where: { id: request.params.id },
      include: [{
        model: User,
        as: 'business_owner',
        attributes: ['firstName', 'Image']
      }]
    }).then((business) => {
      if (!business) {
        return response.status(404).json({
          error: true,
          message: 'Business not found',
        });
      }
      return response.status(200).json({
        error: false,
        message: 'Business found',
        business,
      });
    }).catch(() => response.status(500).json({
      error: true,
      message: 'Server error'
    }));
  }
}
