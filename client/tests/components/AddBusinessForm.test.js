import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import AddBusinessForm from '../../components/AddBusinessForm';


describe('Add Business test', () => {
  it('should return tags particular to the component', () => {
    const wrapper = shallow(<AddBusinessForm
      name="Isaiah"
      location="Lagos"
      category="Ict"
      details="lorem ipsum"
      imagePreview="string"
      onChange={() => {}}
      onSubmit={() => {}}
      onFileChange={() => {}}
    />);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(4);
    expect(wrapper.find('label').length).toBe(6);
    expect(wrapper.find('div').length).toBe(9);
  });
});
