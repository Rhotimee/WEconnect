import express from 'express';

// Controller
import { UserController, BusinessController, ReviewController } from '../../controller';
// import UserController from '../../controller/UserController';
// import BusinessController from '../../controller/BusinessController';
// import ReviewController from '../../controller/ReviewController';

// Middleware
import Middleware from '../../middlewares';


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
router.post('/api/v1/businesses', Middleware.isLoggedIn, BusinessController.register);
// PUT update business
router.put('/api/v1/businesses/:id', Middleware.isLoggedIn, BusinessController.update);
// DELETE delete business
router.delete('/api/v1/businesses/:id', Middleware.isLoggedIn, BusinessController.deleteById);
// GET get all businesses
router.get('/api/v1/businesses/', Middleware.sorter, BusinessController.list);
// Get a Business
router.get('/api/v1/businesses/:id', BusinessController.getById);
// Get all Users
router.get('/api/v1/users', UserController.list);
// Get one User
router.get('/api/v1/users/:id', UserController.getUser);
// Get one User
router.put('/api/v1/users/:id', Middleware.isLoggedIn, UserController.updateUser);
// POST register User
router.post('/api/v1/auth/signup', UserController.signUp);
// POST Login User
router.post('/api/v1/auth/login', UserController.logIn);
// POST Login User
router.get('/api/v1/auth/logout', UserController.logout);
// GET get all reviews
router.get('/api/v1/businesses/:id/reviews', ReviewController.listReview);
// POST add reviews
router.post('/api/v1/businesses/:id/reviews', Middleware.isLoggedIn, ReviewController.addReview);

export default router;
