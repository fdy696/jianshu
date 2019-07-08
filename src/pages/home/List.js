import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Article extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
                <img alt="" className="pic" src={item.get('imgUrl')} />
              </ListItem>
            </Link>
          );
        })}

        <ListItem>
          {/* <img alt="" className="pic" src={item.get('imgUrl')} /> */}
          <ListInfo>
            <h3 className="title">
              舔三年得不到的人，蹦极之后，我们挑选最近的宾馆
            </h3>
            <p className="desc">
              1 我仍然记得，那天我走在悬空大桥上，北风呼啸，吹得头发凌乱。
              我往下俯视，几百层楼的高度，看着就双腿发软。
              想到自己即将往下纵身一跃，立即...
            </p>
          </ListInfo>
        </ListItem>

        <ListItem>
          {/* <img alt="" className="pic" src={item.get('imgUrl')} /> */}
          <ListInfo>
            <h3 className="title">
              舔三年得不到的人，蹦极之后，我们挑选最近的宾馆
            </h3>
            <p className="desc">
              1 我仍然记得，那天我走在悬空大桥上，北风呼啸，吹得头发凌乱。
              我往下俯视，几百层楼的高度，看着就双腿发软。
              想到自己即将往下纵身一跃，立即...
            </p>
          </ListInfo>
        </ListItem>
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList'])
});

export default connect(
  mapState,
  null
)(Article);
