import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Aux } from '../../hoc/aux';


configure({ adapter: new Adapter() });


const setup = () => shallow(<Aux />);

describe('<Loader />', () => {
  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(0);
  });
});

