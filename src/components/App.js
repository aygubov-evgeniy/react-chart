import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom'

import store from '../redux/store';
import rootRoutes from '../RootRoutes.js';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <nav>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/chart">Chart</NavLink>

        <Switch>
          {
            rootRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))
          }
        </Switch>
      </nav>
    </Provider>
  );
}

export default App;
