import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router, Route, Link, browserHistory, IndexRoute
} from 'react-router';
import App from './App';
import Recipes from './Recipes';
import Dashboard from './Dashboard';
import Counter from './Counter';
import './styles.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="recipes" component={Recipes}/>
          <Route path="dashboard" component={Dashboard}/>
          <Route path="about" component={Counter}/>
        </Route>
      </Router>
    ),
    document.getElementById('app')
  );
});
