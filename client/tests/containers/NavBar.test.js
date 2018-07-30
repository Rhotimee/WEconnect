import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedNavbar, { Navbar } from '../../container/NavBar';


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
    userSignoutRequest: jest.fn(() => Promise.resolve()),
    fetchBusinesses: jest.fn(() => Promise.resolve()),
    setSearch: jest.fn(() => Promise.resolve()),
    signedInUser: {
      signedInUser: {
        id: 1,
        firstName: 'rotimi'
      }
    },
    showbox: true
  };
  return shallow(<Navbar {...props} />);
};

describe('<Navbar />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
  });


  describe('state to props', () => {
    it('should render connected page', () => {
      const userReducer = {
        userReducer: {
          id: 1
        }
      };

      const store = mockStore({
        userReducer,
      });
      const wrapper = shallow(<ConnectedNavbar store={store} />);
      expect(wrapper.length).toBe(1);
    });
  });
});

