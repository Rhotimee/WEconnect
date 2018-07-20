import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../container/Signup';
import { oneUserDetail } from '../mock/userData';


let props;
// const { userInput } = mockData;
const setup = () => {
  props = {
    history: {
      push: jest.fn()
    },
    userSignupRequest: jest.fn(() => Promise.resolve())
  };
  return shallow(<Signup {...props} />);
};

describe('Signup test', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('SignupForm').length).toBe(1);
  });
});
