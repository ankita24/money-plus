import React from 'react';
import HomePage from './components/HomePage';
import Login from './components/login';
import Register from './components/register';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from './components/DashBoard';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/nav';

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
