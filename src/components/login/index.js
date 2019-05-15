import React, { Component } from 'react';
import { Button, Form, Container, Grid, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { login } from '../../actions/user';
import { throwStatement } from '@babel/types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick() {
    const { email, password } = this.state;
    if (email && password) {
      this.props.login({
        email,
        password
      });
    }
  }

  componentDidMount() {
    if (!this.props.user.email) {
      this.props.history.push('/register');
    }
    if (this.props.user.isLoggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    if (this.props.user.isLoggedIn) {
      this.props.history.push('/dashboard');
    }
    return (
      <Container style={{ padding: '1rem' }}>
        <Grid>
          <Grid.Row centered>
            <Header>Login</Header>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column width={6}>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </Form.Field>

                <Button primary type="submit" onClick={this.handleClick}>
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  {
    login
  }
)(Login);
