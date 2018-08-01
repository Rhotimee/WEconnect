import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import NotFound from '../../components/NotFound';


describe('Signup Form tests', () => {
  it('should return the number of tags in the component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(1);
  });
});
