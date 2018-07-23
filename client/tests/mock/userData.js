import jwt from 'jsonwebtoken';


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
  Image: 'user.Image'
};


export const token = jwt.sign(userDetails, 'PASSWORD1234');
