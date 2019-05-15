import React from 'react';
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { logout } from '../../actions/user';

function Nav({ isLoggedIn, logout }) {
  return (
    <Menu color="blue" inverted>
      <Menu.Item active>Money</Menu.Item>
      {isLoggedIn && (
        <Menu.Menu position="right">
          <Menu.Item>
            <Button onClick={logout}>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  }),
  {
    logout
  }
)(Nav);
