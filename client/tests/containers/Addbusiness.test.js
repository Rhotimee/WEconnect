import React from 'react';
import { shallow } from 'enzyme';
import { AddBusiness } from '../../container/AddBusiness';
import AddBusinessForm from '../../components/AddBusinessForm';

describe('<AddBusiness />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddBusiness />);
  });

  it('should render <AddBusinessForm /> component', () => {
    // wrapper.setState({
    //   name: 'Andela',
    //   location: 'lagos',
    //   category: 'ict',
    //   details: 'lorem 67',
    //   errors: '',
    //   businessImage: '',
    //   imagePreview: ''
    // });
    expect(wrapper.find(AddBusinessForm)).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(2);
  });
});

