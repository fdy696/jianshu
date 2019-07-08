import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
