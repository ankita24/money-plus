export const SEND_MONEY = 'SEND_MONEY';
export const LOAD_MONEY = 'LOAD_MONEY';

export function sendMoney(amount, recepient) {
  return dispatch => {
    dispatch({
      type: SEND_MONEY,
      data: {
        amount,
        recepient
      }
    });
  };
}

export function loadMoney(amount) {
  return dispatch => {
    dispatch({
      type: LOAD_MONEY,
      data: amount
    });
  };
}
