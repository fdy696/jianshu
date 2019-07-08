import React, { PureComponent } from 'react';
import { LoginlWrapper, LoginlPannel } from './style';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { LoginAction } from '../../store/actionCreator';
import { Redirect } from 'react-router-dom';
class Login extends PureComponent {
  render() {
    const { handleSubmit } = this.props;

    const { getFieldDecorator } = this.props.form;
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) return <Redirect to="/" />;
    return (
      <LoginlWrapper>
        <div className="logo">
          <img
            src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
            alt=""
          />
        </div>
        <LoginlPannel>
          <div className="title">
            <span className="active">随时随地发现和创造内容</span>
          </div>
          <Form onSubmit={handleSubmit.bind(this)}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '用户名不能为空!'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  size="large"
                  placeholder="手机号或邮箱"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码!'
                  }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" block>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </LoginlPannel>
      </LoginlWrapper>
    );
  }
}
const mapState = state => ({
  isLogin: state.getIn(['auth', 'isLogin'])
});

const mapDispatch = dispatch => ({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      localStorage.setItem('isLogin', true);
      dispatch(LoginAction());
    });
  }
});
const LoginForm = Form.create({})(Login);
export default connect(
  mapState,
  mapDispatch
)(LoginForm);
