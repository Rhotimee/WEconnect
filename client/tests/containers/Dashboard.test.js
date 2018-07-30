import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedDashboard, { Dashboard } from '../../container/Dashboard';
import { userDetailsAndBusiness } from '../mock/userData';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });


let props;
const setup = () => {
  props = {
    match: {
      params: {
        id: 1
      }
    },
    fetchOneUser: jest.fn(() => Promise.resolve()),
    user: userDetailsAndBusiness
  };
  return shallow(<Dashboard {...props} />);
};

describe('<Dashboard />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(17);
    expect(wrapper.find('ReviewCard').length).toBe(2);
    expect(wrapper.find('ListBusiness').length).toBe(2);
  });


  describe('state to props', () => {
    it('should render connected page', () => {
      const oneUser = {
        oneUser: userDetailsAndBusiness
      };

      const userReducer = {
        signedInUser: {
          id: 1
        }
      };

      const store = mockStore({
        oneUser,
        userReducer,
      });
      const wrapper = shallow(<ConnectedDashboard store={store} />);
      expect(wrapper.length).toBe(1);
    });
  });
});

