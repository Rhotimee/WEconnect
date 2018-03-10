import express from 'express';
import BusinessController from '../../controller/businessController';

const router = express.Router();

// GET home page.
router.get('/', BusinessController.home);
// Post register business
router.post('/api/v1/businesses', BusinessController.register);

module.exports = router;
