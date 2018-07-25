import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import BusinessListItem from '../../components/BusinessListItem';


describe('Business List Item test', () => {
  it('should return tags particular to the component', () => {
    const wrapper = shallow(<BusinessListItem
      Image="string"
      id={1}
      category="string"
      location="string"
      name="list"
    />);
    expect(wrapper.find('div').length).toBe(7);
  });
});
