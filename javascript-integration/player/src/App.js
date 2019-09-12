import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Player from './Player';

const defaultHistory = createBrowserHistory();
console.log("Inside Player file");
const App = ({ history = defaultHistory }) => (
  <Router history={history}>
      <Route path="/media/:url" component={Player} />
  </Router>
);

export default App;
