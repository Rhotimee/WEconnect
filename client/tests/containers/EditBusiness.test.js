import React from 'react';
import { shallow } from 'enzyme';
import { EditBusiness } from '../../container/EditBusiness';
import { businessDetails2 } from '../mock/businessData';

let props;
const setup = () => {
  props = {
    router: {},
    history: {
      push: jest.fn()
    },
    match: {
      params: {
        id: 2
      },
    },
    business: businessDetails2,
    fetchOneBusiness: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusiness {...props} />);
};

describe('<EditBusiness />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('EditBusinessForm').length).toBe(1);
  });
});

