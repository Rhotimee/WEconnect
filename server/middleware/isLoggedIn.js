import jwt from 'jsonwebtoken';

/**
   * Checks if a user is logged in
   * @param {object} request The requestuest body of the requestuest.
   * @param {object} response The responseponse body.
   * @param {object} next Passes control to next middleware
   * @returns {object} next
   */
const isLoggedIn = (request, response, next) => {
  const token = request.body.token || request.query.token || request.headers['x-access-token'];
  jwt.verify(token, process.env.SALT, (err, decoded) => {
    if (err) {
      return response.status(400).json({
        error: true,
        message: 'User not logged in'
      });
    }
    request.userId = decoded.id;
    return next();
  });
};

export default isLoggedIn;
