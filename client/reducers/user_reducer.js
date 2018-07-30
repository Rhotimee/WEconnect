import isEmpty from 'lodash/isEmpty';


const initialState = {
  isAuthenticated: false,
  signedInUser: {}
};

/**
    * Listens to actions and dispatches new state for the application
    * @param {object} state current state of the application
    * @param {object} action redux action object
    *
    * @return {object} the state of the application
    */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        isAuthenticated: !isEmpty(action.signedInUser),
        signedInUser: action.signedInUser
      };
    default:
      return state;
  }
};

