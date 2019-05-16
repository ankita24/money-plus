import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class HomePage extends Component {
  render() {
    return (
      <Redirect to='/register'/>
    );
  }
}
