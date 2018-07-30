import jwt from 'jsonwebtoken';
import { businessList } from './businessData';
import { reviewList } from './reviewData';


export const userDetails = {
  id: 1,
  firstNmae: 'Isaiah',
};

export const oneUserDetail = {
  id: 1,
  email: 'email@email.com',
  firstName: 'user.firstName',
  lastName: 'user.lastName',
  businesses: 'user.businesses',
  reviews: 'user.reviews',
  Image: 'user.Image',
  isLoading: false,
};  

export const userDetailsAndBusiness = {
  id: 1,
  email: 'email@email.com',
  firstName: 'user.firstName',
  lastName: 'user.lastName',
  businesses: 'user.businesses',
  reviews: 'user.reviews',
  Image: 'user.Image',
  isLoading: false,
  // businesses: businessList.businesses,
  // reviews: reviewList.reviews
};


export const token = jwt.sign(userDetails, 'PASSWORD1234');
