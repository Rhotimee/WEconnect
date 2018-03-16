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
    })).catch(e => res.status(500).json({
      error: true,
      message: e,
    }));
  }

  /**
   * Update a business
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static update(req, res) {
    const {
      name, details, location, category
    } = req.body;
    Business.findById(req.params.id)
      .then((business) => {
        if (!business) {
          return res.status(404).json({
            error: true,
            message: 'Business not found'
          });
        }
        Business.update({
          name: name || business.name,
          details: details || business.details,
          location: location || business.location,
          category: category || business.category
        }, {
          where: { id: req.params.id, },
        }).then((updatedBusiness) => {
          if (!updatedBusiness) {
            return res.status(500).json({
              error: true,
              message: 'Server error'
            });
          }
          return res.status(200).json({
            error: false,
            message: 'Business updated',
            data: updatedBusiness
          });
        });
      });
  }

  /**
   * Delete a business
   *
   * @param {object} req The request body of the request.
   * @param {object} res The response body.
   * @returns {object} res.
   */
  static deleteById(req, res) {
    Business.findById(req.params.id).then((business) => {
      if (!business) {
        return res.status(404).json({
          error: true,
          message: 'No business found',
        });
      }
      Business.destroy({
        where: { id: req.params.id }
      }).then((deleteStatus) => {
        if (!deleteStatus) {
          res.status(500).json({
            error: true,
            message: 'Unable to delete Business'
          });
        }
        return res.status(200).json({
          error: false,
          message: 'Business Deleted',
        });
      });
    });
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
      if (businesses.length === 0) {
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
    Business.findById(req.params.id).then((business) => {
      if (!business) {
        return res.status(404).json({
          error: true,
          message: 'No business found',
        });
      }
      return res.status(200).json({
        error: false,
        business,
      });
    }).catch(() => res.status(500).json({
      error: true,
      message: 'Server error'
    }));
  }
}