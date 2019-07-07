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
        <Route path="/detail" component={Detail} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
