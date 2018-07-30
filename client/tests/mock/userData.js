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
  businesses: [],
  reviews: [],
  Image: 'user.Image',
};

const businesses = [
  {
    id: 1,
    name: 'Andela',
    details: 'Empowering tomorrows leaders',
    location: 'Lagos',
    category: 'Ict',
    Image: 'link',
    reviews: []
  },
  {
    id: 2,
    name: 'Flutter',
    details: 'Finance',
    location: 'Lagos',
    category: 'fin-tech',
    Image: 'Link',
    reviews: []
  }
];

const reviews = [
  {
    id: 1,
    content: 'Amazing tech company',
    star: 4,
    createdAt: '2018-07-07T14:26:51.963Z',
    updatedAt: '2018-07-07T14:26:51.963Z',
    businessId: 1,
    userId: 1,
    reviewer: {
      firstName: 'AdminName'
    },
  },

  {
    id: 2,
    content: 'nice tech',
    star: 5,
    createdAt: '2018-07-07T14:26:51.963Z',
    updatedAt: '2018-07-07T14:26:51.963Z',
    businessId: 1,
    userId: 2,
    reviewer: {
      firstName: 'AdminName'
    },
  }
];

export const userDetailsAndBusiness = {
  id: 1,
  email: 'email@email.com',
  firstName: 'user.firstName',
  lastName: 'user.lastName',
  Image: 'user.Image',
  isLoading: false,
  businesses,
  reviews,
};


export const token = jwt.sign(userDetails, 'PASSWORD1234');
