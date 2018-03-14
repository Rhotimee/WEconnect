import express from 'express';
import DumBusinessController from '../../controller/businessController';
import Middleware from '../../middleware';
import DumUserController from '../../controller/userController';
import userController from '../../controller/user';
import DumReviewController from '../../controller/reviewController';

const router = express.Router();

// REDIRECT '/' to '/api/v1'
router.get('/', (req, res) => {
  res.redirect('/api/v1');
});
// Redirect '/' to '/api-docs'
router.get('/api/v1', (req, res) => {
  res.redirect('/api-docs');
});
// POST register business
router.post('/api/v1/businesses', DumBusinessController.register);
// PUT update business
router.put('/api/v1/businesses/:id', DumBusinessController.update);
// DELETE delete business
router.delete('/api/v1/businesses/:id', DumBusinessController.deleteById);
// GET get all businesses
router.get('/api/v1/businesses/', Middleware.sorter, DumBusinessController.list);
// Get a Business
router.get('/api/v1/businesses/:id', DumBusinessController.getById);
// Get all Users
router.get('/api/v1/users', userController.list);
// POST register User
router.post('/api/v1/auth/signup', userController.signUp);
// POST Login User
router.post('/api/v1/auth/login', DumUserController.logIn);
// GET get all reviews
router.get('/api/v1/businesses/:id/reviews', DumReviewController.listReview);
// POST add reviews
router.post('/api/v1/businesses/:id/reviews', DumReviewController.addReview);

export default router;
