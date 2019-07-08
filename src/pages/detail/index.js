import React, { PureComponent } from 'react';
import { DetailWrapper, DHeader, Content } from './style';
import followUrl from '../../statics/follow.png';
import Header from '../../common/header';
import { withRouter } from 'react-router-dom';
class Detail extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <DetailWrapper>
          <DHeader>国民才女武亦姝被清华录取，我是你看不到的高度。</DHeader>
          <img
            src={followUrl}
            alt=""
            style={{ width: '60%', marginTop: '10px' }}
          />

          <Content>
            <p>
              全国各地高考成绩陆续揭晓，而中国诗词大会冠军武亦姝取到了613的高分。
            </p>
            <p>
              <b>要知道，清华去年的分数线也才610分。</b>
            </p>
            <p>
              2017年2月，16岁的武亦姝在央视《中国诗词大会》第二季总决赛中取得了节目开播以来的最高分，获得总冠军，被誉为“国民才女”。她给人的印象太深刻了，那句淡定的诗词，
              <b>
                “七月在野，八月在宇，九月在户，十月蟋蟀，入我床下。”至今记忆犹新。
              </b>
            </p>
            <p>
              <img
                src="https://upload-images.jianshu.io/upload_images/12396388-3a73ec36d3fd138b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp"
                alt=""
              />
            </p>
            <p>
              长发飘飘，气质出众。她完美诠释了中国家长眼中的“别人家的孩子。”
            </p>
            <p>
              这样的一个女孩子，即使被拿来被比较，也不会讨厌她呢，只会觉得自己羞愧不如吧。
            </p>
            <p>
              毕竟她16岁的时候就可以站在舞台中央，沉着冷静的应对比赛，令所有网友都被她的气质所折服，感叹她满足了大家“对古代才女”的所有幻想，而我的十六岁，应该只想着如何给隔壁班的男生递情书叭。
            </p>
            <p>令我无语的是，居然还有人质疑她613分就能上清华。</p>
          </Content>
        </DetailWrapper>
      </div>
    );
  }
}

export default withRouter(Detail);
