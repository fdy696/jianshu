import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  width: 625px;
`;

export const HomeRight = styled.div`
  width: 280px;
  padding-left: 30px;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  .pic {
    display: block;
    width: 140px;
    height: 100px;
    float: right;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

export const ListInfo = styled.div`
  padding-right: 30px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin-top: 30px;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const Download = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 10px 22px;
  margin-top: 10px;
  width: 280px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  .show-cord {
    display: none;
    position: absolute;
    top: -165px;
    left: 70px;
    padding: 5px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    background-color: #fff;
    img {
      width: 140px;
      height: 140px;
    }
    .triangle_border_down {
      width: 0;
      height: 0;
      border-width: 10px 10px 0;
      border-style: solid;
      border-color: #dcdcdc transparent transparent; /*灰 透明 透明 */
      position: absolute;
      left: 65px;
      margin: 5px auto;
      span {
        display: block;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 9px solid #fff;
        position: absolute;
        left: -8px;
        top: -10px;
      }
    }
  }
  &:hover {
    .show-cord {
      display: block;
    }
  }
  .download-img {
    width: 82px;
  }
`;

export const DownloadInfo = styled.div`
  float: right;
  .title {
    font-size: 15px;
    color: #333;
    font-weight: 400;
  }
  .desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  cursor: pointer;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const AddWrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 160px;
  .ad-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: #000;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
  }
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Footer = styled.div`
  color: #c8c8c8;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;
