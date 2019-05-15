import { REGISTER, LOGIN, LOGOUT } from '../actions/user';

const initialState = {
  isLoggedIn: false,
  name: '',
  email: '',
  password: ''
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        name: data.name,
        email: data.email,
        password: data.password
      };

    case LOGIN:
      if (state.email === data.email && state.password === data.password) {
        return {
          ...state,
          isLoggedIn: true
        };
      }

      return state;

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
