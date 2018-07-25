
const initialState = {
  search: '',
  type: '',
  page: 1,
};

/**
    * Listens to actions and dispatches new state for the application
    * @param {object} state current state of the application
    * @param {object} action redux action object
    *
    * @return {object} the state of the application
    */
const searchReducer = (state = initialState, action = {}) => {
  if (action.type === 'set_search') {
    return action.payload;
  }

  return state;
};

export default searchReducer;
