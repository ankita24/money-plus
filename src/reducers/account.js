import { LOAD_MONEY, SEND_MONEY } from '../actions/account';

const initialState = {
  amount: {
    sent: 100,
    received: 1000
  },
  transactions: [
    {
      id: 1,
      createdAt: Date.now(),
      amount: 100,
      name: 'McDonalds',
      type: 'sent' // or received
    },
    {
      id: 2,
      createdAt: Date.now(),
      amount: 1000,
      name: 'Wallet Topup',
      type: 'received' // or received
    }
  ]
};

function loadAmount(transactionArray, amount) {
  const transaction = {
    id: transactionArray.length + 1,
    type: 'received',
    name: 'Added Money to Wallet',
    createdAt: Date.now(),
    amount
  };

  transactionArray.push(transaction);

  return transactionArray;
}

function sendAmount(transactionArray, amount, recepient) {
  const transaction = {
    id: transactionArray.length + 1,
    type: 'sent',
    name: `Money sent to ${recepient}`,
    createdAt: Date.now(),
    amount
  };

  transactionArray.push(transaction);

  return transactionArray;
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case LOAD_MONEY:
      return {
        ...state,
        amount: {
          sent: state.amount.sent,
          received: state.amount.received + parseFloat(data)
        },
        transactions: loadAmount(state.transactions, data)
      };

    case SEND_MONEY:
      return {
        ...state,
        amount: {
          sent: state.amount.sent + parseFloat(data.amount),
          received: state.amount.received
        },
        transactions: sendAmount(
          state.transactions,
          data.amount,
          data.recepient
        )
      };

    default:
      return state;
  }
};
