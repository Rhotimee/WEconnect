
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
  static home(req, res){
    res.json({
      message: 'Welocme to Weconnect',
      error: false,
    });
  }
}
