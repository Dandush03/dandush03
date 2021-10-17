/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import appHeight from './javascripts/documentHeight';

// Components
import './components';
import { Home } from './pages';

// Assets
import './assets/stylesheets/Main.scss';

// Services
import storeConfig from './store';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/dandush03" exact component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
appHeight();
