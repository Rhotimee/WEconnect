import isInt from 'validator/lib/isInt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import Model from '../models';
import upload from '../utils/upload';

dotenv.config();
const { Business } = Model;

const ImgUpload = upload.single('Image');
// const userImgUpload = upload.single('userImg');

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});


/**
 * Middleware
 * @class Middleware
 * */
export default class Middleware {
  /**
   * Register a new business
   *
   * @param {object} request The request body.
   * @param {object} response The response body.
   * @param {object} next Run the controller.
   * @returns {object} response.
   */
  static sorter(request, response, next) {
    const { location, category, page } = request.query;

    const limit = 5; // number of businesses per page
    const offset = limit * (page - 1);

    if (!location && !category) {
      request.params.page = page;
      next();
    }

    if (location) {
      Business.findAndCountAll({
        where: {
          location:
          { $ilike: `%${location}%` }
        },
        order: [['createdAt', 'DESC']],
        limit,
        offset
      }).then((businesses) => {
        const pages = Math.ceil(businesses.count / limit);
        if (businesses.length === 0 || page > pages) {
          return response.status(404).json({
            error: true,
            message: `No business found in ${location}`,
            pagination: {
              pages,
              page
            }
          });
        }
        return response.status(200).json({
          error: false,
          businesses,
          pagination: {
            pages,
            page
          }
        });
      });
    }

    if (category) {
      Business.findAndCountAll({
        where: {
          category: { $ilike: `%${category}%` }
        },
        order: [['createdAt', 'DESC']],
        limit,
        offset
      }).then((businesses) => {
        const pages = Math.ceil(businesses.count / limit);
        if (businesses.length === 0 || page > pages) {
          return response.status(404).json({
            error: true,
            message: `No business found in ${category}`,
            pagination: {
              pages,
              page
            }
          });
        }
        return response.status(200).json({
          error: false,
          businesses,
          pagination: {
            pages,
            page
          }
        });
      });
    }
  }

  /**
   * Checks if a user is logged in
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @param {object} next Passes control to next middleware
   * @returns {object} next
   */
  static isLoggedIn(request, response, next) {
    const token = request.body.token || request.query.token || request.headers['x-access-token'] || request.headers.authorization;
    console.log(token, 'token');
    jwt.verify(token, process.env.SALT, (err, decoded) => {
      console.log(decoded);
      if (err) {
        return response.status(401).json({
          error: true,
          message: 'User not logged in'
        });
      }
      request.userId = decoded.id;
      return next();
    });
  }
  /**
   * Checks if a user is logged in
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @param {object} next Passes control to next middleware
   * @returns {object} next
   */
  static validParam(request, response, next) {
    const reqId = request.params.id;
    const id = isInt(reqId);
    if (!id) {
      return response.status(400).json({
        error: true,
        message: 'Invalid params'
      });
    }
    next();
  }

  /**
   * Checks if a user is logged in
   * @param {object} request The request body of the requestuest.
   * @param {object} response The response body.
   * @param {object} next Passes control to next middleware
   * @returns {object} next
   */
  static ImageUpload(request, response, next) {
    ImgUpload(request, response, (error) => {
      if (error) {
        return response.status(400).json({
          error: true,
          message: 'failed to upload'
        });
      } else if (request.file) {
        cloudinary.v2.uploader.upload(request.file.path, (err, result) => {
          if (!err && result !== undefined) {
            request.body.Image = result.secure_url;
            return next();
          }
          return response.status(400).json({
            error: true,
            message: 'failed to upload'
          });
        });
      } else {
        next();
      }
    });
  }
}
