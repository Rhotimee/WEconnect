import express from 'express';
import BusinessController from '../../controller/businessController';

const router = express.Router();

// POST register business
router.post('/businesses', BusinessController.register);
// PUT register business
router.put('/businesses/:id', BusinessController.update);
// PUT register business
router.delete('/businesses/:id', BusinessController.deleteById);

module.exports = router;
