import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loader } from '../../components/Loader';


configure({ adapter: new Adapter() });


const setup = () => shallow(<Loader />);

describe('<Loader />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
  });
});

