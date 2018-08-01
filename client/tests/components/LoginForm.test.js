import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import LoginForm from '../../components/loginForm';


describe('Signup Form tests', () => {
  it('should return the number of tags in the component', () => {
    const wrapper = shallow(<LoginForm
      email="i@gm.com"
      password="pass"
      confirmPassword="pass"
      onChange={() => {}}
      onSubmit={() => {}}
      onFileChange={() => {}}
    />);
    expect(wrapper.find('div').length).toBe(8);
    expect(wrapper.find('form').length).toBe(1);
  });
});
