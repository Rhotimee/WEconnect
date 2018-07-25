/**
    * Listens to actions and dispatches new state for the application
    * @param {object} state current state of the application
    * @param {object} action redux action object
    *
    * @return {object} the state of the application
    */
const oneUserReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'FETCH_ONE_USER':
      return { oneUser: action.payload };

    default:
      return state;
  }
};

export default oneUserReducer;

