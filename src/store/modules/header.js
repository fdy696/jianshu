import { fromJS } from 'immutable';
import { FOCUS_CHANGE } from '../actionTypes';
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === FOCUS_CHANGE) {
    return state.set('focused', action.value);
  }
  return state;
};
