import express from 'express';
import BusinessController from '../../controller/businessController';

const router = express.Router();

// POST register business
router.post('/businesses', BusinessController.register);
// PUT update business
router.put('/businesses/:id', BusinessController.update);
// DELETE delete business
router.delete('/businesses/:id', BusinessController.deleteById);
// GET get all businesses
router.get('/businesses/', BusinessController.list);

module.exports = router;
