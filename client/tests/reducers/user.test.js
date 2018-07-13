import userReducer from '../../reducers/reducer_one_user';
import { oneUserDetail } from '../mock/userData'

describe('Business Reducer', () => {
  it('should save one user in the store', () => {
    const initialState = {};
    const action = {
      type: 'FETCH_ONE_USER',
      payload: oneUserDetail,
    };

    const newState = userReducer(initialState, action);

    expect(newState.oneUser).toEqual(oneUserDetail);
    expect(newState.oneUser.email).toEqual('email@email.com');
  });

  it('should return initial state if no action type is called', () => {
    const initialState = {};
    const action = {};

    const newState = userReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});


