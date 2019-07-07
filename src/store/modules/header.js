import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === 'xxx') {
    return state.set('focused', false);
  }

  return state;
};
