import express from 'express';
import { BusinessController } from '../../controller';
const router = express.Router();

/* GET home page. */
router.get('/', BusinessController.home);


module.exports = router;
