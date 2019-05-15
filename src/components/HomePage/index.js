import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          width: '200px',
          height: '50px',
          textAlign: 'center',
          backgroundColor: 'red'
        }}
      >
        <Link to="/register">
          <Button>Sign Up</Button>
        </Link>

        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    );
  }
}
