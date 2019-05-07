import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const app = (
  <Router>
    <Route path="/" exact component={App} />
  </Router>
);

ReactDOM.render(app, document.getElementById('body-container'));
