import React from 'react';
import { Provider } from 'react-redux';
// import { Switch, Route, NavLink } from 'react-router-dom'

import store from '../redux/store';
// import rootRoutes from '../RootRoutes.js';

import Chart from './chart/Chart';
import Form from './form/Form';
import AddedTags from './addedTags/AddedTags';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <aside className="app-sidebar">
          <div className="app-sidebar__header">What i do?</div>

          <div className="app-sidebar__inner">
            <Form />
            <AddedTags />
          </div>
        </aside>

        <article className="app-content">
          <div className="app-content__header"></div>
          
          <div className="app-content__inner">
            <div className="app-chart">
              <div className="app-chart__header title">Tags</div>
              
              <div className="app-chart__inner">
                <Chart />
              </div>
            </div>
          </div>
        </article>
      </main>
    </Provider>
  );
}

export default App;
