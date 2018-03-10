import express from 'express';
import BusinessController from '../../controller/businessController';

const router = express.Router();

/* GET home page. */
router.get('/', BusinessController.home);


module.exports = router;
