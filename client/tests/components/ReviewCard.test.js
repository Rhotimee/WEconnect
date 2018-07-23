import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ReviewCard from '../../components/ReviewCard';


describe('Footer tests', () => {
  it('should return the number of tags in the component', () => {
    const wrapper = shallow(<ReviewCard
      content="lorem ipsum"
      star={3}
      reviewer={{}}
      userId={1}
    />);
    expect(wrapper.find('div').length).toBe(5);
  });
});
