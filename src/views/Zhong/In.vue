<template>
  <Panel title="In货推荐" :class="$style.panel">
    <section :class="$style.content">
      <!-- <div :class="$style.item">
        <img src="http://img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200" alt="">
        <section :class="$style.list">
          <div :class="$style.product">
            <img src="http://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg" alt="">
            <p :class="$style.title">双响炮蓝牙音箱</p>
            <p :class="$style.price"><em>29.00</em>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner"></div>
              </div>
              <p :class="$style.num">172%</p>
              <label>精选</label>
            </article>
          </div>
          <div :class="$style.product">
            <img src="http://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg" alt="">
            <p :class="$style.title">双响炮蓝牙音箱</p>
            <p :class="$style.price"><em>29.00</em>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner"></div>
              </div>
              <p :class="$style.num">172%</p>
            </article>
          </div>
        </section>
      </div> -->
      <div :class="$style.item" v-for="item in items" :key="item.catory">
        <img :src="item.catory" alt="">
        <section :class="$style.list">
          <div :class="$style.product" v-for="v in item.list" :key="v.title">
            <img :src="v.img" :alt="v.title">
            <p :class="$style.title">{{v.title}}</p>
            <p :class="$style.price"><em>{{v.price}}</em>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width: v.progress + '%'}"></div>
              </div>
              <p :class="$style.num">{{v.progress}}%</p>
              <label v-if="v.label">精选</label>
            </article>
          </div>          
        </section>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../components/Panel'

export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          catory: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              img: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
              title: '双响炮蓝牙音箱',
              price: '29.00',
              progress: 72,
              label: true
            },
            {
              img: '//m.360buyimg.com/babel/s153x153_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg!q50.jpg.webp',
              title: '脑波相机',
              price: '998',
              progress: 159,
              label: false
            }
          ]
        },
        {
          catory: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              img: '//m.360buyimg.com/babel/s153x153_jfs/t976/252/53307955/170572/32ce7762/5502a56fN726c860b.jpg!q50.jpg.webp',
              title: '尼康相机',
              price: '6599.00',
              progress: 86,
              label: false
            },
            {
              img: '//m.360buyimg.com/babel/s153x153_jfs/t4753/139/2433188483/98570/215c60ea/58ff0c52Na6380717.jpg!q50.jpg.webp',
              title: '索尼黑卡',
              price: '4299',
              progress: 79,
              label: false
            }
          ]
        },
        {
          catory: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              img: '//m.360buyimg.com/babel/s153x153_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg!q50.jpg.webp',
              title: 'Apple iPhone8 64G 真的很好用啊',
              price: '5888.00',
              progress: 62,
              label: false
            },
            {
              img: '//m.360buyimg.com/babel/s153x153_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg!q50.jpg.webp',
              title: 'Apple iPhoneX 64G',
              price: '9666',
              progress: 23,
              label: true
            }
          ]
        }
      ]
    }
  }
}
</script>


<style lang="scss" module>
@import '../../assets/css/element.scss';
@import '../../assets/css/layout.scss';
@import '../../assets/css/text.scss';

.panel {
  @include panel;
  .content {
    @include flex;
    .item {
      width: 100%;
      > img {
        width: 100%;
        display: block;
        height: 170px;
      }
      .list {
        @include flex(row);
        .product {
          width: 50%;
          padding: 0 16px 30px;
          box-sizing: border-box;
          height: 396px;
          background: rgba(0,0,0,0.02);
          text-align: center;
          position:relative;
          img {
            width: 180px;
            height: 180px;
            margin: 44px auto 20px;       
          }
          .title {
            font-size: 28px;
            color: #444;
            @include ellipsis;
          }
          .price {
            font-size: 20px;
            color:#999;
            line-height: 48px;
            height: 48px;       
            em {
              font-size: 36px;
              color:#ff3232;
              margin-right: 8px;
              &:before {
                content: '￥';
                font-size: 28px;
              }
            }
          }
          article {
            @include flex(row);
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            .wrapper {
              width: 144px;
              height: 10px;
              background-color:#f6e6e6;
              border-radius: 22px;
              margin-top: 20px;
              .inner {
                max-width: 100%;
                width: 40%;
                height: 10px;
                background-image: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
                border-radius: 22px;
              }
            }
            .num {
              margin-left: 10px;
              margin-top: 16px;
              font-size: 18px;
            }
          }
          label {
            position:absolute;
            left: 22px;
            top: 12px;
            font-size: 20px;
            color:red;
            text-align: center;
            padding: 2px 4px;
            background: rgba(0,0,0,0.2);
          }
        }
      }
    }
  }
}
</style>
