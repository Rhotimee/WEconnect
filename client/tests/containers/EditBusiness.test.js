import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedEditBusiness, { EditBusiness } from '../../container/EditBusiness';
import { businessDetails2 } from '../mock/businessData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    router: {},
    history: {
      push: jest.fn()
    },
    match: {
      params: {
        id: 2
      },
    },
    business: businessDetails2,
    fetchOneBusiness: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusiness {...props} />);
};

let props2;
const setup2 = () => {
  props2 = {
    router: {},
    history: {
      push: jest.fn()
    },
    match: {
      params: {
        id: 2
      },
    },
    business: null,
    fetchOneBusiness: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusiness {...props2} />);
};

describe('<EditBusiness />', () => {
  it('should return  items exist', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('EditBusinessForm').length).toBe(1);
  });

  it('should return  items if no business', () => {
    const wrapper = setup2();
    expect(wrapper.find('h2').length).toBe(1);
  });
});


describe('state to props', () => {
  it('should render connected page', () => {
    const oneBusiness = {
      oneBusiness: businessDetails2
    };

    const store = mockStore({
      oneBusiness,
    });
    const wrapper = shallow(<ConnectedEditBusiness store={store} />);
    expect(wrapper.length).toBe(1);
  });
});

