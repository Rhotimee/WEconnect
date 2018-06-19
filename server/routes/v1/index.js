import express from 'express';

// Controller
import { UserController, BusinessController, ReviewController } from '../../controller';

// Middleware
import Middleware from '../../middlewares';

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect('/api-docs');
});
// POST register business
router.post('/businesses', Middleware.isLoggedIn, Middleware.ImageUpload, BusinessController.register);
// PUT update business
router.put('/businesses/:id', Middleware.isLoggedIn, Middleware.ImageUpload, Middleware.validParam, BusinessController.update);
// DELETE delete business
router.delete('/businesses/:id', Middleware.isLoggedIn, Middleware.validParam, BusinessController.deleteById);
// GET get all businesses
router.get('/businesses/', Middleware.sorter, BusinessController.list);
// Get a Business
router.get('/businesses/:id', Middleware.validParam, BusinessController.getById);
// Get all Users
router.get('/users', UserController.list);
// Get one User
router.get('/users/:id', Middleware.validParam, UserController.getUser);
// Get one User
router.put('/users/:id', Middleware.isLoggedIn, Middleware.validParam, Middleware.ImageUpload, UserController.updateUser);
// POST register User
router.post('/auth/signup', Middleware.ImageUpload, UserController.signUp);
// POST Login User
router.post('/auth/login', UserController.logIn);
// POST Login User
router.get('/auth/logout', UserController.logout);
// GET get all reviews
router.get('/businesses/:id/reviews', Middleware.validParam, ReviewController.listReview);
// POST add reviews
router.post('/businesses/:id/reviews', Middleware.isLoggedIn, Middleware.validParam, ReviewController.addReview);
// 404
router.use('*', (req, res) => { 
  res.status(404).json({
    error: true,
    message: 'Not found'
  });
});
export default router;
