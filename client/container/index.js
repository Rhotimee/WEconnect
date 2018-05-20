import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './Routes';
import '../styles/style.scss';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import setAuthToken from '../helpers/setAuthToken'

const store = createStore(
  reducers,  
  composeWithDevTools (
    applyMiddleware(thunk)
  )
);

const token = localStorage.getItem('token');

if (token) {
  setAuthToken(token);
  store.dispatch({
    type: CURRENT_USER,
    user: jwtDecode(token),
    isAuthenticated: true
  });
}

// const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
