import BusinessReducer from '../../reducers/reducer_businesses';
import oneBusinessReducer from '../../reducers/reducer_one_business';
import searchReducer from '../../reducers/reducer_search';
import { businessList, businessDetails2 } from '../mock/businessData';

describe('Business Reducer', () => {
  it('should store businesses in the allBusinesses an Object', () => {
    const initialState = { allBusinesses: {} };
    const action = {
      type: 'FETCH_BUSINESSES',
      payload: businessList,
    };

    const newState = BusinessReducer(initialState, action);

    expect(newState.allBusinesses.businesses).toEqual(businessList.businesses);
    expect(newState.allBusinesses.pagination).toEqual(businessList.pagination);
  });

  it('should return initial state if no action type is called', () => {
    const initialState = { allBusinesses: {} };
    const action = {};

    const newState = BusinessReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

describe('One Business Reducer', () => {
  it('should save one business in store', () => {
    const initialState = {};
    const action = {
      type: 'FETCH_ONE_BUSINESS',
      payload: businessDetails2,
    };

    const newState = oneBusinessReducer(initialState, action);
    expect(newState.oneBusiness).toEqual(businessDetails2);
    expect(newState.oneBusiness.name).toEqual('Andela');
  });

  it('should return initial state if no action type is called', () => {
    const initialState = {};
    const action = {};

    const newState = oneBusinessReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

describe('Search Business Reducer', () => {
  it('should store search parameters', () => {
    const initialState = {};
    const action = {
      type: 'set_search',
      payload: businessDetails2,
    };

    const newState = searchReducer(initialState, action);
    expect(newState.id).toEqual(1);
    expect(newState.name).toEqual('Andela');
  });

  it('should return initial state if no action type is called', () => {
    const initialState = {};
    const action = {};

    const newState = searchReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

