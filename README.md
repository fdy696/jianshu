# jianshu

React 技术栈实现简书网站，实现登陆、首页文章列表、文章详情页、登陆鉴权等功能；
主要运用技术：React.js、Ant-Design-React、React-router4(动态路由,react-loadable 路由懒加载)、React-redux(immutable,redux-thunk，combineReducer，actionTypes,actionCreator)，Axios，easy-mock,styled-components。

---

### create-react-app 搭建初始项目

```
create-react-app jianshu
```

### 目录结构

```
src
----- apis // 请求接口
----- common // 公共组件
----- pages  // 功能页面
----- App.js
----- index.js
----- index.css

```

### 安装基础包

```
yarn add axios styled-components normalize.css react-router-dom
```

---

### 路由搭建

```
// App.js
import React from 'react';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
      </BrowserRouter>
  );
}

export default App;

```

### 封装 axios 方法库

基础版

```
// 1.引入axios
import axios from 'axios';

// 2.配置默认值
axios.defaults.baseURL =
  'https://www.easy-mock.com/mock/5d21ea330019711f845e181b/api/v1';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

// 3.封装

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    //配置参数对象
    let option = {
      url,
      method: type,
      validateStatus: function(status) {
        return (status >= 200 && status < 300) || status === 400;
      }
    };
    // 对get和post请求传递的数据进行区分
    if (type.toLowerCase() === 'get') {
      option.params = data;
    } else {
      option.data = data;
    }
    axios(option)
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch(err => {
        reject({ msg: '网络异常' });
      });
  });
}

```

```

store
----- index.js
----- reducer.js
----- modules
----- actionTypes.js
----- actionCreater.js

```

---

### 使用 react-redux

```
yarn add redux react-redux immutable redux-immutable
```

- index.js

```
import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer)

export default store


```

- reducer.js

```
import {combineReducers} from 'redux-immutable'

import header from './modules/header'

export default combineReducers({
	header
})

```

- module->header.js

```
import {fromJS} from 'immutable'

const defaultState = fromJS({
	focused: false
})

export default (state=defaultState,action)=>{
	if(action.type==='xxx'){
		return state.set('focused',false)
	}

	return state
}

```

- actionTypes.js

```
export const FOCUS_CHANGE = 'searchChangeInputFocusChange'

```

- actionCreators.js

```
import {FOCUS_CHANGE} from './actionTypes'

export const focusChange = ()=>({
	type: FOCUS_CHANGE
})

```

- app.js

```
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

```
