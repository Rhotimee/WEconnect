import jwt from 'jsonwebtoken';
import { businessList0 } from './businessData';
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
  businesses: [],
  reviews: [],
  Image: 'user.Image',
};

export const userDetailsAndBusiness = {
  id: 1,
  email: 'email@email.com',
  firstName: 'user.firstName',
  lastName: 'user.lastName',
  Image: 'user.Image',
  isLoading: false,
  businesses: businessList0.businesses.rows,
  reviews: reviewList.reviews
};


export const token = jwt.sign(userDetails, 'PASSWORD1234');
