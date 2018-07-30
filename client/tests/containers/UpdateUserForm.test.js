import React from 'react';
import { shallow } from 'enzyme';
import { UpdateUserForm } from '../../components/UpdateUserForm';
import { oneUserDetail } from '../mock/userData';

let props;
const setup = () => {
  props = {
    router: {},
    history: {
      push: jest.fn()
    },
    updateUserDetails: jest.fn(() => Promise.resolve()),
    user: oneUserDetail
  };
  return shallow(<UpdateUserForm {...props} />);
};

describe('<UpdateUserForm test />', () => {
  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    const event = {
      target: {
        name: 'firstName',
        value: 'Timi'
      }
    };
    action.onChange(event);
    expect(action.state.firstName).toEqual('Timi');
  });

  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        firstName: 'lorem',
        lastName: 'yemi',
        email: 'eam@e.com',
        password: 'pass',
        Image: 'link'
      },
      preventDefault: jest.fn()
    };
    action.onSubmit(event);

    expect(onSubmit).toBeCalled();
  });
});
