import { fromJS } from 'immutable';
import { Login, Logout } from '../actionTypes';
const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  if (action.type === Login) {
    return state.set('isLogin', true);
  }
  if (action.type === Logout) {
    return state.set('isLogin', false);
  }
  return state;
};
