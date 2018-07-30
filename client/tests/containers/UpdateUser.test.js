import React from 'react';
import { shallow } from 'enzyme';
import { UpdateUser } from '../../container/UpdateUser';
import { userDetails } from '../mock/userData';

let props;
const setup = () => {
  props = {
    router: {},
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
