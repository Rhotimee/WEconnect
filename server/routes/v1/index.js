import express from 'express';
import BusinessController from '../../controller/businessController';
import Middleware from '../../middleware';
import UserController from '../../controller/userController';

const router = express.Router();

// REDIRECT '/' to '/api/v1'
router.get('/', (req, res) => {
  res.redirect('/api/v1');
});
// GET welcome message
router.get('/api/v1', (req, res) => {
  res.json({
    message: 'welcome to version 1 of Weconnect',
    error: false
  });
});
// POST register business
router.post('/api/v1/businesses', BusinessController.register);
// PUT update business
router.put('/api/v1/businesses/:id', BusinessController.update);
// DELETE delete business
router.delete('/api/v1/businesses/:id', BusinessController.deleteById);
// GET get all businesses
router.get('/api/v1/businesses/', Middleware.sorter, BusinessController.list);
// Get a Business
router.get('/api/v1/businesses/:id', BusinessController.getById);
// Get all Users
router.get('/api/v1/users', UserController.list);
// POST register User
router.post('/api/v1/auth/signup', UserController.signUp);
// POST Login User
router.post('/api/v1/auth/login', UserController.logIn);


export default router;
