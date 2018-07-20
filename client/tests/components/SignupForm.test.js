import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SignupForm from '../../components/SignupForm';


describe('Signup Form tests', () => {
  it('should return the number of tags in the component', () => {
    const wrapper = shallow(<SignupForm
      firstName="Isaiah"
      lastName="Yemi"
      email="i@gm.com"
      password="pass"
      confirmPassword="pass"
      onChange={() => {}}
      onSubmit={() => {}}
      onFileChange={() => {}}
    />);
    expect(wrapper.find('div').length).toBe(12);
    expect(wrapper.find('form').length).toBe(1);
  });
});
