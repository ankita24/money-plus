import React, { Component } from 'react';
import { Button, Form, Container, Header, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { register } from '../../actions/user';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick() {
    const { name, email, password } = this.state;
    if (name && email && password) {
      this.props.register({
        name,
        email,
        password
      });

      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    if (this.props.user.email) {
      this.props.history.push('/login');
    }
    if (this.props.user.isLoggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <Container style={{ padding: '1rem' }}>
        <Grid>
          <Grid.Row centered>
            <Header>Register</Header>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column width={6}>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
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
    register
  }
)(Register);
