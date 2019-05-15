import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
  Grid,
  Segment,
  Statistic,
  Table
} from 'semantic-ui-react';
import Load from '../load';
import Send from '../Send';

class Transaction extends Component {
  constructor() {
    super();
    this.state = {
      showSection: null
    };
  }
  componentDidMount() {}

  render() {
    const transactions = this.props.account.transactions.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1} centered>
            <Grid.Column width={16}>
              <Segment>
                <Grid>
                  <Divider vertical>AND</Divider>
                  <Grid.Row columns={2}>
                    <Grid.Column width={8} textAlign="center">
                      <Statistic>
                        <Statistic.Label>Sent</Statistic.Label>
                        <Statistic.Value>
                          {this.props.account.amount.sent}
                        </Statistic.Value>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="center">
                      <Statistic>
                        <Statistic.Label>Received</Statistic.Label>
                        <Statistic.Value>
                          {this.props.account.amount.received}
                        </Statistic.Value>
                      </Statistic>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} centered>
            <Grid.Column width={16}>
              <Segment>
                <Grid>
                  <Divider vertical>OR</Divider>
                  <Grid.Row columns={2}>
                    <Grid.Column width={8} textAlign="center">
                      <Button
                        onClick={() =>
                          this.setState({
                            showSection:
                              this.state.showSection === 'send' ? null : 'send'
                          })
                        }
                        primary
                      >
                        Send Money
                      </Button>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="center">
                      <Button
                        onClick={() =>
                          this.setState({
                            showSection:
                              this.state.showSection === 'load' ? null : 'load'
                          })
                        }
                        primary
                      >
                        Load Money
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          {this.state.showSection ? (
            this.state.showSection === 'send' ? (
              <Grid.Row columns={1} centered>
                <Grid.Column width={16}>
                  <Segment>
                    <Grid>
                      <Grid.Row columns={1} centered>
                        <Grid.Column width={8}>
                          <Send />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            ) : (
              <Grid.Row columns={1} centered>
                <Grid.Column width={16}>
                  <Segment>
                    <Grid>
                      <Grid.Row columns={1} centered>
                        <Grid.Column width={8}>
                          <Load />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            )
          ) : null}
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Time</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {transactions.map(transaction => (
                    <Table.Row
                      positive={transaction.type === 'received'}
                      negative={transaction.type === 'sent'}
                      key={transaction.id}
                    >
                      <Table.Cell>{transaction.name}</Table.Cell>
                      <Table.Cell>
                        {new Intl.DateTimeFormat('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(transaction.createdAt)}
                      </Table.Cell>
                      <Table.Cell>{transaction.amount}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell>
                      Total {transactions.length} transactions
                    </Table.HeaderCell>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(Transaction);
