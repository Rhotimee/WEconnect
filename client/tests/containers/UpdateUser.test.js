import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import connectedUpdateUser, { UpdateUser } from '../../container/UpdateUser';
import { userDetails } from '../mock/userData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    match: {
      params: 1
    },
    fetchOneUser: jest.fn(() => Promise.resolve()),
    updateUserDetails: userDetails,
    user: userDetails
  };
  return shallow(<UpdateUser {...props} />);
};

describe('<UpdateUser test />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('UpdateUserForm').length).toBe(1);
  });
});


let props2;
const setup2 = () => {
  props2 = {
    match: {
      params: 1
    },
    fetchOneUser: jest.fn(() => Promise.resolve()),
    updateUserDetails: userDetails,
  };
  return shallow(<UpdateUser {...props2} />);
};

describe('<UpdateUser test />', () => {
  it('should return  items if not', () => {
    const wrapper = setup2();
    expect(wrapper.find('h2').length).toBe(1);
  });
});

describe('state to props', () => {
  it('should render connected page', () => {
    const oneUser = {
      oneUser: userDetails
    };

    const store = mockStore({
      oneUser,
    });
    const wrapper = shallow(<connectedUpdateUser store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
