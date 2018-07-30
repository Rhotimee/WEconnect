import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import BusinessListItem2 from '../../components/BusinessListItem2';


describe('Business List Item test', () => {
  it('should return tags particular to the component', () => {
    const wrapper = shallow(<BusinessListItem2
      Image="string"
      id={1}
      category="string"
      location="string"
      name="list"
      reviews={[]}
    />);
    expect(wrapper.find('div').length).toBe(3);
  });
});
