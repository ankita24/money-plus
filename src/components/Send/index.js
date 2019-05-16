import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { sendMoney } from '../../actions/account';

class Send extends Component {
  constructor() {
    super();
    this.state = {
      money: '',
      user: ''
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
    const { money, user } = this.state;
    if (money && money > 0 && user) {
      this.props.sendMoney(money, user);
      this.setState({
        money: '',
        user: ''
      });
    }
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Money</label>
          <input
            type="number"
            min="0"
            name="money"
            placeholder="Money"
            onChange={this.handleChange}
            value={this.state.money}
          />
        </Form.Field>
        <Form.Field>
          <label>User</label>
          <input
            type="text"
            name="user"
            placeholder="Whom to send?"
            onChange={this.handleChange}
            value={this.state.user}
          />
        </Form.Field>

        <Button type="submit" onClick={this.handleClick}>
          Send
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  {
    sendMoney
  }
)(Send);
