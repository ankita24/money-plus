import React, { Component } from 'react';
import Send from '../Send';
import Transaction from '../Transaction';
import { connect } from 'react-redux';
import { Header, Container, Grid } from 'semantic-ui-react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  render() {
    if (!this.props.user.isLoggedIn) {
      this.props.history.push('/login');
    }
    return (
      <Container>
        <Header>Hi, {this.props.user.name}</Header>
        <Grid>
          <Grid.Row columns={1} centered>
            <Grid.Column width={10}>
              <Transaction />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Dashboard);
