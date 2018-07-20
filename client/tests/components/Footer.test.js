import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../../components/Footer';


describe('Footer test', () => {
  it('should return four <Li></Li> items if not', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('Link').length).toBe(7);
  });
});
