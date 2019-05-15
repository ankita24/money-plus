export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function register(userInfo) {
  return dispatch => {
    dispatch({
      type: REGISTER,
      data: userInfo
    });
  };
}

export function login(userCredentials) {
  return dispatch => {
    dispatch({
      type: LOGIN,
      data: userCredentials
    });
  };
}

export function logout() {
  return dispatch => {
    dispatch({
      type: LOGOUT
    });
  };
}
