import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loadMoney } from '../../actions/account';
export class Load extends Component {
  constructor() {
    super();
    this.state = {
      money: 0
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
    if (this.state.money) {
      this.props.loadMoney(this.state.money);
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
            placeholder="Load Money"
            onChange={this.handleChange}
            value={this.state.money}
          />
        </Form.Field>

        <Button type="submit" onClick={this.handleClick}>
          Add
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  {
    loadMoney
  }
)(Load);
