import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinessList, { BusinessList } from '../../container/BusinessList';
import { businessList0 } from '../mock/businessData';

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
    fetchBusinesses: jest.fn(() => Promise.resolve()),
    setSearch: jest.fn(() => Promise.resolve()),
    data: businessList0,
  };
  return shallow(<BusinessList {...props} />);
};

let props2;
const setup2 = () => {
  props2 = {
    router: {},
    history: {
      push: jest.fn()
    },
    fetchBusinesses: jest.fn(() => Promise.resolve()),
    setSearch: jest.fn(() => Promise.resolve()),
    data: {
      businesses: null
    }
  };
  return shallow(<BusinessList {...props2} />);
};

describe('<BusinessList />', () => {
  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    action.onChange(1);
    expect(action.state.current).toEqual(1);
  });

  it('Test click event', () => {
    const wrapper = setup();
    wrapper.find('#click1').simulate('click');
    wrapper.find('#click2').simulate('click');
    wrapper.find('#click3').simulate('click');
    wrapper.find('#click4').simulate('click');
    wrapper.find('#click5').simulate('click');
  });

  it('should return  items if', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(9);
    expect(wrapper.find('ListBusiness').length).toBe(0);
  });

  it('should return  items if no business yet', () => {
    const wrapper = setup2();
    expect(wrapper.find('p').length).toBe(1);
  });

  describe('state to props', () => {
    it('should render connected page', () => {
      const Businesses = {
        allBusinesses: businessList0
      };

      const search = {
        search: 'business',
        type: 'anystring',
        page: 1
      };

      const store = mockStore({
        Businesses,
        search
      });
      const wrapper = shallow(<ConnectedBusinessList store={store} />);
      expect(wrapper.length).toBe(1);
    });
  });
});

