import { fromJS } from 'immutable';
import { SET_HOMEDATA } from '../actionTypes';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  if (action.type === SET_HOMEDATA) {
    return state.merge({
      topicList: fromJS(action.value.topicList),
      articleList: fromJS(action.value.articleList),
      recommendList: fromJS(action.value.recommendList)
    });
  }

  return state;
};
