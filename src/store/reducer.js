import { combineReducers } from 'redux-immutable';

import header from './modules/header';
import home from './modules/home';
import auth from './modules/auth';
export default combineReducers({
  header,
  home,
  auth
});
