import React, { PureComponent } from 'react';
import { AddWrapper } from './style';
class Writer extends PureComponent {
  render() {
    return (
      <AddWrapper>
        <img
          style={{ height: '160px' }}
          src="//cdn2.jianshu.io/assets/ads/java-62d16127d94c8ca4c8a40ada899c97f4.png"
          alt="广告"
        />
        <span className="ad-badge">广告</span>
      </AddWrapper>
    );
  }
}

export default Writer;
