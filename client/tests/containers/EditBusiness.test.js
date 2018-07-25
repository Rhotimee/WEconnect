import React from 'react';
import { shallow } from 'enzyme';
import { EditBusiness } from '../../container/EditBusiness';
// import AddBusinessForm from '../../components/AddBusinessForm';

let props;
const setup = () => {
  props = {
    history: {
      push: jest.fn()
    },
    userSignupRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusiness {...props} />);
};

describe('<EditBusiness />', () => {
  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    const event = {
      target: {
        name: 'name',
        value: 'Andela'
      }
    };
    action.onChange(event);
    expect(action.state.name).toEqual('Andela');
  });

  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('AddBusinessForm').length).toBe(1);
  });

  it('should submit', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(action, 'onSubmit');
    const event = {
      target: {
        name: 'lorem',
        location: 'yemi',
        category: 'isaiah@gmail.com',
        details: 'password',
        businessImage: 'link',
      },
      preventDefault: jest.fn()
    };
    action.onSubmit(event);

    expect(onSubmit).toBeCalled();
  });
});

