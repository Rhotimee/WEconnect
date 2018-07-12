import { token } from './userData';


export const review = {
  content: 'Amazing tech company',
  star: 4,
  token,
};

export const reviewList = {
  reviews: [
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
  ]
};

