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

describe('<BusinessList />', () => {
  it('should set state', () => {
    const wrapper = setup();
    const action = wrapper.instance();

    action.onChange(1);
    expect(action.state.current).toEqual(1);
  });

  it('should click', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onClick = jest.spyOn(action, 'onClick');
    const text = 'String';
    action.onClick(text);

    expect(onClick).toBeCalled();
  });

  it('should return  items if not', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(9);
    expect(wrapper.find('ListBusiness').length).toBe(0);
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

