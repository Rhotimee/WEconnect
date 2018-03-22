import express from 'express';

// Controller
import { UserController, BusinessController, ReviewController } from '../../controller';

// Middleware
import Middleware from '../../middlewares';


const router = express.Router();

// REDIRECT '/' to '/api/v1'
router.get('/', (request, response) => {
  response.redirect('/api/v1');
});
// Redirect '/' to '/api-docs'
router.get('/api/v1', (request, response) => {
  response.redirect('/api-docs');
});
// POST register business
router.post('/api/v1/businesses', Middleware.isLoggedIn, BusinessController.register);
// PUT update business
router.put('/api/v1/businesses/:id', Middleware.isLoggedIn, Middleware.validParam, BusinessController.update);
// DELETE delete business
router.delete('/api/v1/businesses/:id', Middleware.isLoggedIn, Middleware.validParam, BusinessController.deleteById);
// GET get all businesses
router.get('/api/v1/businesses/', Middleware.sorter, BusinessController.list);
// Get a Business
router.get('/api/v1/businesses/:id', Middleware.validParam, BusinessController.getById);
// Get all Users
router.get('/api/v1/users', UserController.list);
// Get one User
router.get('/api/v1/users/:id', Middleware.validParam, UserController.getUser);
// Get one User
router.put('/api/v1/users/:id', Middleware.isLoggedIn, Middleware.validParam, UserController.updateUser);
// POST register User
router.post('/api/v1/auth/signup', UserController.signUp);
// POST Login User
router.post('/api/v1/auth/login', UserController.logIn);
// POST Login User
router.get('/api/v1/auth/logout', UserController.logout);
// GET get all reviews
router.get('/api/v1/businesses/:id/reviews', Middleware.validParam, ReviewController.listReview);
// POST add reviews
router.post('/api/v1/businesses/:id/reviews', Middleware.isLoggedIn, Middleware.validParam, ReviewController.addReview);

export default router;
