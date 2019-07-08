import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  Download,
  DownloadInfo,
  Footer
} from './style';
import Header from '../../common/header';
import List from './List';
import Recommend from './Recommend';
import Writer from './Writer';
import HOME from '../../apis/home';
import { setHomeData } from '../../store/actionCreator';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Header />

        <HomeWrapper>
          <HomeLeft>
            <img
              style={{ width: '620px', marginTop: '30px', borderRadius: '5px' }}
              alt=""
              src="http://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            />
            <List />
            <Footer>
              ©2012-2019 上海佰集信息科技/ 简书 / 沪ICP备11018329号
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252"
              >
                <img
                  src="//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png"
                  alt="Smrz"
                />
              </a>
              沪公网安备31010402002252号
            </Footer>
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Download>
              <img
                className="download-img"
                src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              />
              <div className="show-cord">
                <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                <div className="triangle_border_down">
                  <span />
                </div>
              </div>
              <DownloadInfo>
                <h4 className="title">下载简书手机App ></h4>
                <p className="desc">随时随地发现和创作内容</p>
              </DownloadInfo>
            </Download>
            <Writer />
          </HomeRight>
        </HomeWrapper>
      </div>
    );
  }

  componentDidMount() {
    this.props.setHomeData();
  }
}

// const mapState = state => {};

const mapDispatch = dispatch => ({
  setHomeData() {
    HOME.getAll().then(res => {
      dispatch(setHomeData(res.data));
    });
  }
});

export default connect(
  null,
  mapDispatch
)(Home);
