import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinessDetails, { BusinessDetails } from '../../container/BusinessDetails';
import { reviewList } from '../mock/reviewData';
import { userDetails } from '../mock/userData';
import { businessDetails2 } from '../mock/businessData';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });


let props;
const setup = () => {
  props = {
    router: {},
    match: {
      params: {
        id: 1
      }
    },
    fetchOneBusiness: jest.fn(() => Promise.resolve()),
    deleteOneBusiness: jest.fn(() => Promise.resolve()),
    fetchReviews: jest.fn(() => Promise.resolve()),
    addReview: jest.fn(() => Promise.resolve()),
    business: businessDetails2,
    reviews: reviewList.reviews,
    user: userDetails
  };
  return shallow(<BusinessDetails {...props} />);
};

describe('<BusinessDetails />', () => {
  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    const event = {
      target: {
        name: 'content',
        value: 'lorem'
      }
    };
    action.onChange(event);
    expect(action.state.content).toEqual('lorem');
  });

  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(21);
    expect(wrapper.find('ReviewCard').length).toBe(2);
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        star: 5,
        content: 'lorem ipsum',
      },
      preventDefault: jest.fn()
    };
    action.onSubmit(event);

    expect(onSubmit).toBeCalled();
  });

  describe('state to props', () => {
    it('should render connected page', () => {
      const oneBusiness = {
        oneBusiness: businessDetails2
      };

      const userReducer = {
        signedInUser: {
          id: 1
        }
      };

      const allReviews = {
        allReviews: []
      };

      const store = mockStore({
        oneBusiness,
        userReducer,
        allReviews
      });
      const wrapper = shallow(<ConnectedBusinessDetails store={store} />);
      expect(wrapper.length).toBe(1);
    });
  });
});

