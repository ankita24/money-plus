import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Dashboard from './components/DashBoard';
import HomePage from './components/HomePage';
import Login from './components/login';
import Nav from './components/nav';
import Register from './components/register';

const App = props => {
  return (
    <Router {...props} history={createBrowserHistory()}>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
