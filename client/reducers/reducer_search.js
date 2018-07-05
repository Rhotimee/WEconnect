
const initialState = {
  search: '',
  type: '',
  page: 1,
};

const searchReducer = (state = initialState, action = {}) => {
  if (action.type === 'set_search') {
    return action.payload;
  }

  return state;
};

export default searchReducer;
