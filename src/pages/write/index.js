import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
class Write extends Component {
  render() {
    const isLogin = localStorage.getItem('isLogin');
    {
      if (isLogin) {
        return <div>write</div>;
      } else {
        message.warning('*继续操作前请注册或登录');
        return <Redirect to="/login" />;
      }
    }
  }
}

export default Write;
