import { createStore } from 'redux';
import reducer from './reducer';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools());

export default store;
