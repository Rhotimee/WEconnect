import React from 'react';
import { shallow } from 'enzyme';
import { EditBusinessForm } from '../../components/EditBusinessForm';
import { businessDetails2 } from '../mock/businessData';

let props;
const setup = () => {
  props = {
    router: {},
    history: {
      push: jest.fn()
    },
    business: businessDetails2,
    updateOneBusiness: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusinessForm {...props} />);
};

describe('<EditBusinessForm />', () => {
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
    expect(wrapper.find('div').length).toBe(9);
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

