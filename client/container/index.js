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
import setAuthToken from '../helpers/setAuthToken';
import { setCurrentUser } from '../actions/userActions';
import jwt from 'jsonwebtoken';

const store = createStore(
  reducers,  
  composeWithDevTools (
    applyMiddleware(thunk)
  )
);

if (localStorage.userToken) {
  setAuthToken(localStorage.userToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.userToken)));
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
