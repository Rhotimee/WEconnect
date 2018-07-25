import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../container/Login';

let props;
const setup = () => {
  props = {
    history: {
      push: jest.fn()
    },
    userSigninRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<Login {...props} />);
};

describe('<Login test />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('LoginForm').length).toBe(1);
  });

  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    const event = {
      target: {
        name: 'name',
        value: 'Isaiah'
      }
    };
    action.onChange(event);
    expect(action.state.name).toEqual('Isaiah');
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        firstName: 'rotimi',
        lastName: 'yemi',
        email: 'isaiah@gmail.com',
        password: 'password'
      },
      preventDefault: jest.fn()
    };
    action.onSubmit(event);

    expect(onSubmit).toBeCalled();
  });
});
