import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';
import { focusChange, LogoutAction } from '../../store/actionCreator';
class Header extends Component {
  render() {
    const { focused, handleInputFocusChange, logout } = this.props;
    const isLogin = localStorage.getItem('isLogin');
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">发现</NavItem>
          <NavItem className="left">下载App</NavItem>
          <div style={{ paddingRight: '30px' }}>
            {isLogin ? (
              <Link to="/login">
                <NavItem onClick={logout} className="right">
                  退出
                </NavItem>
              </Link>
            ) : (
              <Link to="/login">
                <NavItem className="right">登陆</NavItem>
              </Link>
            )}
            <NavItem className="right">Aa</NavItem>
          </div>

          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocusChange}
                onBlur={handleInputFocusChange}
              />
            </CSSTransition>
            <i
              className={
                focused
                  ? 'focused iconfont zoom iconsearch'
                  : 'iconfont zoom iconsearch'
              }
            />
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont iconyumaobi" />
              写文章
            </Button>
          </Link>

          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  componentDidMount() {
    localStorage.getItem('isLogin');
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    isLogin: state.getIn(['auth', 'isLogin'])
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocusChange(e) {
      let value = e.type === 'blur' ? false : true;
      dispatch(focusChange(value));
    },
    logout() {
      localStorage.removeItem('isLogin');
      dispatch(LogoutAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
