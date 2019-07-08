import { FOCUS_CHANGE, SET_HOMEDATA, Login, Logout } from './actionTypes';

export const focusChange = value => ({
  type: FOCUS_CHANGE,
  value
});

export const setHomeData = value => ({
  type: SET_HOMEDATA,
  value
});

export const LoginAction = () => ({
  type: Login
});

export const LogoutAction = () => ({
  type: Logout
});
