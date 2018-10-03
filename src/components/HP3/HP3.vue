<template>
  <div class="home-main">

    <!-- 手机部分 -->
    <Layout>
      <div class="container">
        <div class="home-brick-row-2-box">
          <!-- 头部 -->
           <div class="box-hd">
            <h2 class="title">
              手机
            </h2>
            <div class="more">
              <div class="more-link">
                查看全部
                <Icon type="ios-arrow-dropright-circle" />
              </div>
            </div>
          </div>

          <!-- 主要内容 -->
          <div class="box-bd">
            <div class="row">

              <div class="span-first span4">
                <!-- <div  class="test"></div> -->
                <ul class="brick-promo-list clearfix">
                  <li class="brick-item-1">
                    <img src="https://i1.mifile.cn/a4/xmad_15323220713837_GLBVX.jpg" width="100%" height="100%" style="display:block;transition: all .2s linear;">
                  </li>
                </ul>
              </div>

              <div class="span-first span16">
                <ul class="brick-list clearfix">
                  <li class="brick-item brick-item-2" v-for="(val , index) in BrickList" :key="index">
                    <div class="figure-img">
                      <img :src="val.src" alt="" width="160" height="160">
                    </div>
                    <h3 class= "title">
                      {{val.title}}
                    </h3>
                    <p class="desc">{{val.desc}}</p>
                    <p class="price">
                      <span class="num">{{val.price}}</span>
                      元
                    </p>
                    <div :class="getClass(index)" class="flag" >{{val.flag}}</div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
    <!-- 手机部分结束 -->

    <!-- 手机部分下面横幅 -->
    <Layout>
      <div class="container">
        <div class="home-banner-box-hero">
          <img src="https://i1.mifile.cn/a4/xmad_15380969866001_qAxtF.jpg" alt="" width="1226px">
        </div>
      </div>
    </Layout>
    <!-- 手机部分下面横幅结束 -->

    <!-- 家电部分开始 -->
    <Layout>
      <div class="container">
        <div class="home-brick-row-2-box">
          <elec-app></elec-app>
        </div>
      </div>
    </Layout>
    <!-- 家电部分结束 -->

    <!-- 手机部分下面横幅 -->
    <Layout>
      <div class="container">
        <div class="home-banner-box-hero">
          <img src="https://i1.mifile.cn/a4/xmad_15380545696566_mzECo.jpg" alt="" width="1226px">
        </div>
      </div>
    </Layout>
    <!-- 手机部分下面横幅结束 -->

    <!-- 家电部分开始 -->
    <Layout>
      <div class="container">
        <div class="home-brick-row-2-box">
          <elec-app></elec-app>
        </div>
      </div>
    </Layout>
    <!-- 家电部分结束 -->

    <!-- 手机部分下面横幅 -->
    <Layout>
      <div class="container">
        <div class="home-banner-box-hero">
          <img src="https://i1.mifile.cn/a4/xmad_1538235286966_dyUBT.jpg" alt="" width="1226px">
        </div>
      </div>
    </Layout>
    <!-- 手机部分下面横幅结束 -->

    <!-- 家电部分开始 -->
    <Layout>
      <div class="container">
        <div class="home-brick-row-2-box">
          <elec-app></elec-app>
        </div>
      </div>
    </Layout>
    <!-- 家电部分结束 -->

    <!-- 手机部分下面横幅 -->
    <Layout>
      <div class="container">
        <div class="home-banner-box-hero">
          <img src="https://i1.mifile.cn/a4/xmad_15381340961167_kSfKZ.jpg" alt="" width="1226px">
        </div>
      </div>
    </Layout>
    <!-- 手机部分下面横幅结束 -->

    <!-- 家电部分开始 -->
    <Layout>
      <div class="container">
        <div class="home-brick-row-2-box">
          <elec-app></elec-app>
        </div>
      </div>
    </Layout>
    <!-- 家电部分结束 -->

     <!-- 手机部分下面横幅 -->
    <Layout>
      <div class="container">
        <div class="home-banner-box-hero">
          <img src="https://i1.mifile.cn/a4/xmad_15282822747649_UXhkN.jpg" alt="" width="1226px">
        </div>
      </div>
    </Layout>
    <!-- 手机部分下面横幅结束 -->

    <!-- 家电部分开始 -->
    <Layout>
      <div class="container">
        <div class="home-brick-row-2-box">
          <elec-app></elec-app>
        </div>
      </div>
    </Layout>
    <!-- 家电部分结束 -->

    <!-- 为你推荐开始 -->
    <Layout>
      <div class="container">
        <div class="xm-flashPurchase">

          <!-- 上部控件开始 -->
           <div class="box-hd">
            <h2 class="title">
              为你推荐
            </h2>
            <div class="more" style="top:14px">
              <div class="xm-controls">
                <a href="javascript:;" @click="back" ref="back">
                  <Icon type="ios-arrow-back" />
                </a>
                <a href="javascript:;" @click="forward" ref="forward">
                  <Icon type="ios-arrow-forward" />
                </a>
                <!-- <a href=""></a> -->
              </div>
            </div>
          </div>
          <!-- 上部控件结束 -->

          <!-- 下部内容开始 -->
          <div class="xm-carousel-wrapper">
            <div class="container">
              <ul style="width:4960px;margin-left:0px;transition:margin-left .5s ease 0s " ref="oLi">
                <li v-for="(val , index ) in 20" :key="index">
                  <!-- {{val}} -->
                  <div class="figure-imm">
                    <img src="https://i1.mifile.cn/a1/pms_1531116730.76137577!140x140.jpg" alt="" width="160" height="160">
                  </div>
                  <h3 class="title">
                     红米6A 全网通版 3GB内存 32GB
                  </h3>
                  <p class="price">
                    <span class="num">649</span>
                    元
                  </p>
                  <span class="tips">
                    1892人好评
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 下部内容结束 -->
        </div>
      </div>
    </Layout>
    <!-- 为你推荐结束 -->

    <!-- 热销产品开始 -->
    <Layout>
      <div class="container">
        <div class="xm-flashPurchase">

          <!-- 上部标题开始 -->
          <div class="box-hd">
            <h2 class="title">
              热销产品
            </h2>
          </div>
          <!-- 上部标题结束 -->

          <div class="box-bd" style="padding:0;overflow:visible">
            <ul class="review-list clearfix">
              <li class="review-item" v-for="(val , index) in ReviewList" :key="index " :style="index === 0 ? 'margin-left:0' : ''">
                <div class="figure-img">
                  <img :src="val.src" alt="" width="296" height="220">
                </div>
                <p class="review">
                  {{val.review}}
                </p>
                <p class="author"> {{val.author}} </p>
                <div class="info">
                  <h3 class="title">
                    {{val.name}}
                  </h3>
                  <span class="sep">|</span>
                  <p class="price">
                    <span class="num">
                      {{val.price}}
                    </span>
                    元
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
    <!-- 热销产品结束 -->

    <!-- 内容模块开始 -->
      <Layout>
        <div class="container">
          <div class="xm-flashPurchase">

            <!-- 上部标题开始 -->
            <div class="box-hd">
              <h2 class="title">
                内容
              </h2>
            </div>
          <!-- 上部标题结束 -->

          <!-- 下部内容开始 -->
          <div class="box-bd" style="padding:0;overflow:visible">
            <ul class="clearfix content-list">

              <li class="content-item flag-0" style="margin-left:0" >
                <h2 class="title">
                  图书
                </h2>
                <!-- 轮播图开始 -->
                <div style="height:340px;overflow:hidden">
                  <ul class="item-list" style="width:888px;margin-left:0px;transition:margin-left .5s ease 0s" ref="oUl">
                    <li v-for="(item , num) in 3" :key="num">
                      <!-- {{item}} -->
                      <h4 class="name">哈利·波特与被诅咒的孩子</h4>
                      <p class="desc">
                        “哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！
                      </p>
                      <p class="price">29.37元</p>
                      <div class="figure-img">
                        <img src="https://i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757" alt="" width="216" height="154">
                      </div>
                      <!-- <div class="xm-pagers-wrapper" :style="num === 0 ? '' : 'display:none'">
                        <ul>
                          <li class="pager" v-for="(val , index ) in 3" :key="index" @click="getActive" >
                            <span class="dot"></span>
                          </li>

                        </ul>
                      </div> -->
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="javascript:;" class="control" style="left:0" @click="itemBack">
                    <Icon type="ios-arrow-back" />
                  </a>
                  <a href="javascript:;" class="control" style="right:0" @click="itemForward">
                    <Icon type="ios-arrow-forward" />
                  </a>
                </div>
                <!-- 轮播图结束 -->
              </li>

              <li class="content-item flag-1">
                <h2 class="title">
                  MIUI主题
                </h2>
                <!-- 轮播图开始 -->
                <div style="height:340px;overflow:hidden">
                  <ul class="item-list" style="width:888px;margin-left:0px;transition:margin-left .5s ease 0s" ref="oUlitem1">
                    <li v-for="(item , num) in 3" :key="num">
                      <!-- {{item}} -->
                      <h4 class="name">熊本熊 酷MA萌</h4>
                      <p class="desc">
                        戳一戳、摸一摸，酷MA萌会在锁屏跟你亲密互动哦。
                      </p>
                      <p class="price"></p>
                      <div class="figure-img">
                        <img src="https://i1.mifile.cn/a4/xmad_15360565735203_Uuvyd.jpg" alt="" width="216" height="154">
                      </div>
                      <!-- <div class="xm-pagers-wrapper" :style="num === 0 ? '' : 'display:none'">
                        <ul>
                          <li class="pager" v-for="(val , index ) in 3" :key="index" @click="getActive" >
                            <span class="dot"></span>
                          </li>

                        </ul>
                      </div> -->
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="javascript:;" class="control" style="left:0" @click="itemBackitem1">
                    <Icon type="ios-arrow-back" />
                  </a>
                  <a href="javascript:;" class="control" style="right:0" @click="itemForwarditem1">
                    <Icon type="ios-arrow-forward" />
                  </a>
                </div>
                <!-- 轮播图结束 -->
              </li>

              <li class="content-item flag-2">
                <h2 class="title">
                  游戏
                </h2>
                <!-- 轮播图开始 -->
                <div style="height:340px;overflow:hidden">
                  <ul class="item-list" style="width:888px;margin-left:0px;transition:margin-left .5s ease 0s" ref="oUlitem2">
                    <li v-for="(item , num) in 3" :key="num">
                      <!-- {{item}} -->
                      <h4 class="name">非人学院</h4>
                      <p class="desc">
                        脑洞大开的二次元竞技手游
                      </p>
                      <p class="price"></p>
                      <div class="figure-img">
                        <img src="https://i1.mifile.cn/a4/xmad_15299832299419_eIPOw.png" alt="" width="216" height="154">
                      </div>
                      <!-- <div class="xm-pagers-wrapper" :style="num === 0 ? '' : 'display:none'">
                        <ul>
                          <li class="pager" v-for="(val , index ) in 3" :key="index" @click="getActive" >
                            <span class="dot"></span>
                          </li>

                        </ul>
                      </div> -->
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="javascript:;" class="control" style="left:0" @click="itemBackitem2">
                    <Icon type="ios-arrow-back" />
                  </a>
                  <a href="javascript:;" class="control" style="right:0" @click="itemForwarditem2">
                    <Icon type="ios-arrow-forward" />
                  </a>
                </div>
                <!-- 轮播图结束 -->
              </li>
              <li class="content-item flag-3">
                <h2 class="title">
                  应用
                </h2>
                <!-- 轮播图开始 -->
                <div style="height:340px;overflow:hidden">
                  <ul class="item-list" style="width:888px;margin-left:0px;transition:margin-left .5s ease 0s" ref="oUlitem3">
                    <li v-for="(item , num) in 3" :key="num">
                      <!-- {{item}} -->
                      <h4 class="name">2017金米奖</h4>
                      <p class="desc">
                        最优秀的应用和游戏
                      </p>
                      <p class="price"></p>
                      <div class="figure-img">
                        <img src="https://i1.mifile.cn/a4/3332da7d-4056-4694-9548-c83b7b3af7d3" alt="" width="216" height="154">
                      </div>
                      <!-- <div class="xm-pagers-wrapper" :style="num === 0 ? '' : 'display:none'">
                        <ul>
                          <li class="pager" v-for="(val , index ) in 3" :key="index" @click="getActive" >
                            <span class="dot"></span>
                          </li>

                        </ul>
                      </div> -->
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="javascript:;" class="control" style="left:0" @click="itemBackitem3">
                    <Icon type="ios-arrow-back" />
                  </a>
                  <a href="javascript:;" class="control" style="right:0" @click="itemForwarditem3">
                    <Icon type="ios-arrow-forward" />
                  </a>
                </div>
                <!-- 轮播图结束 -->
              </li>

            </ul>
          </div>
          <!-- 下部内容结束 -->
          </div>
        </div>
      </Layout>
    <!-- 内容模块结束 -->

    <!-- 视频模块开始 -->
    <Layout>
      <div class="container">
         <div class="home-box-vide">

           <!-- 头部开始 -->
           <div class="box-hd">
            <h2 class="title">
              视频
            </h2>
            <div class="more">
              <div class="more-link">
                查看全部
                <Icon size="20" type="ios-arrow-dropright-circle" />
               </div>
             </div>
           </div>
           <!-- 头部结束 -->

           <!-- 内容开始 -->
           <div class="box-bd" style="padding:0;overflow:visible">
             <ul class="video-list clearfix">
               <li class="video-item" v-for="(val , index ) in HomeVideo " :key="index" :style="index === 0 ? 'margin-left:0' : ''">

                 <div class="figure-img">
                   <img :src="val.src" alt="" width="296" height="180">
                   <span class="play" @click="Video">
                     <Icon type="ios-play" />
                   </span>
                 </div>

                 <h3 class="title">
                   {{val.title}}
                 </h3>
                 <p class="desc">
                   {{val.desc}}
                 </p>

               </li>
             </ul>
           </div>
           <!-- 内容结束 -->

         </div>
      </div>
    </Layout>
    <!-- 视频模块结束 -->

    <!-- 视屏模块video开始 -->
    <transition-group name="flip-list" tag="div">
      <Layout v-show="isVideo" :key="1">
        <!-- <transition-group name="flip-list" tag="div"> -->
          <div class="video" >
            <div class="video-hd">
              <h3 class="title">
                一团火
              </h3>
              <a href="javascript:;" class="close" @click="Video" >
                <Icon size="24" type="md-close" />
              </a>
            </div>
            <img src="https://i1.mifile.cn/a4/xmad_15318974928021_cthgC.jpg" alt="" width="880" height="536">
          </div>
        <!-- </transition-group> -->
      </Layout>
    </transition-group>
    <Layout v-show="isVideo">
      <div class="backcol">

      </div>
    </Layout>
    <!-- 视屏模块video结束 -->

    <!-- 脚部信息开始 -->
    <Footer>
      <div class="container">

        <!-- 脚部服务开始 -->
        <div class="footer-service">
          <ul class="list-service clearfix">
            <li style="border-left:0">
              <a>
                预约维修服务
              </a>
            </li>
            <li>
              <a>
                7天无理由退货
              </a>
            </li>
            <li>
              <a>
                15天免费换货
              </a>
            </li>
            <li>
              <a>
                满150元包邮
              </a>
            </li>
            <li>
              <a>
                520余家售后网点
              </a>
            </li>
          </ul>
        </div>
        <!-- 脚部服务结束 -->

        <!-- 脚部链接开始 -->
        <div class="footer-links clearfix">
          <dl class="col-links">
            <dt>帮助中心</dt>
            <dd><a>账户管理</a></dd>
            <dd><a>购物指南</a></dd>
            <dd><a>订单操作</a></dd>
          </dl>
          <dl class="col-links">
            <dt>服务支持</dt>
            <dd><a>售后政策</a></dd>
            <dd><a>自助服务</a></dd>
            <dd><a>相关下载</a></dd>
          </dl>
          <dl class="col-links">
            <dt>线下门店</dt>
            <dd><a>小米之家</a></dd>
            <dd><a>服务网点</a></dd>
            <dd><a>授权体验店</a></dd>
          </dl>
          <dl class="col-links">
            <dt>关于小米</dt>
            <dd><a>了解小米</a></dd>
            <dd><a>加入小米</a></dd>
            <dd><a>投资者关系</a></dd>
          </dl>
          <dl class="col-links">
            <dt>关注我们</dt>
            <dd><a>新浪微博</a></dd>
            <dd><a>官方微信</a></dd>
            <dd><a>联系我们</a></dd>
          </dl>
          <dl class="col-links">
            <dt>特色服务</dt>
            <dd><a>F 码通道</a></dd>
            <dd><a>礼物码</a></dd>
            <dd><a>防伪查询</a></dd>
          </dl>
          <div class="col-contact">
            <p class="phone">400-100-5678</p>
            <p>
              周一至周日 8:00-18:00
              <br>
             （仅收市话费）
            </p>
            <a href="javascript:;" class="line-primary">联系客服</a>
          </div>
        </div>
        <!-- 脚部链接结束 -->

        <div class="slogan">

        </div>
      </div>
    </Footer>
    <!-- 脚部信息结束 -->

    <BackTop :height="760" :bottom="100">
        <!-- <div class="top">返回顶端</div> -->
        <div class="top">
          <Icon type="md-arrow-round-up"  style="color:#757575"/>
          回顶部
        </div>
    </BackTop>
  </div>
</template>
<script>
import './HP3.scss'
import ElecApp from './ElecApp/ElecApp'
import {mapGetters} from 'vuex'
export default {
  components: {
    ElecApp
  },
  data () {
    return {
      isVideo: false
    }
  },
  computed: {
    ...mapGetters('HP3', ['BrickList', 'ReviewList', 'HomeVideo'])
  },
  methods: {
    getClass (index) {
      return 'flag-' + index
    },
    back () {
      if (parseFloat(this.$refs.oLi.style.marginLeft) >= 0) {

      } else {
        this.$refs.oLi.style.marginLeft = parseFloat(this.$refs.oLi.style.marginLeft) + 1240 + 'px'
      }
    },
    forward () {
      if (parseFloat(this.$refs.oLi.style.marginLeft) <= -3720) {
        console.log('start')
        // break
      } else {
        this.$refs.oLi.style.marginLeft = parseFloat(this.$refs.oLi.style.marginLeft) - 1240 + 'px'
      }
    },
    itemBack () {
      if (parseFloat(this.$refs.oUl.style.marginLeft) >= 0) {

      } else {
        this.$refs.oUl.style.marginLeft = parseFloat(this.$refs.oUl.style.marginLeft) + 296 + 'px'
      }
    },
    itemForward () {
      if (parseFloat(this.$refs.oUl.style.marginLeft) <= -592) {
        console.log('start')
        // break
      } else {
        this.$refs.oUl.style.marginLeft = parseFloat(this.$refs.oUl.style.marginLeft) - 296 + 'px'
      }
    },
    itemBackitem1 () {
      if (parseFloat(this.$refs.oUlitem1.style.marginLeft) >= 0) {

      } else {
        this.$refs.oUlitem1.style.marginLeft = parseFloat(this.$refs.oUlitem1.style.marginLeft) + 296 + 'px'
      }
    },
    itemForwarditem1 () {
      if (parseFloat(this.$refs.oUlitem1.style.marginLeft) <= -592) {
        console.log('start')
        // break
      } else {
        this.$refs.oUlitem1.style.marginLeft = parseFloat(this.$refs.oUlitem1.style.marginLeft) - 296 + 'px'
      }
    },
    itemBackitem2 () {
      if (parseFloat(this.$refs.oUlitem2.style.marginLeft) >= 0) {

      } else {
        this.$refs.oUlitem2.style.marginLeft = parseFloat(this.$refs.oUlitem2.style.marginLeft) + 296 + 'px'
      }
    },
    itemForwarditem2 () {
      if (parseFloat(this.$refs.oUlitem2.style.marginLeft) <= -592) {
        console.log('start')
        // break
      } else {
        this.$refs.oUlitem2.style.marginLeft = parseFloat(this.$refs.oUlitem2.style.marginLeft) - 296 + 'px'
      }
    },
    itemBackitem3 () {
      if (parseFloat(this.$refs.oUlitem3.style.marginLeft) >= 0) {

      } else {
        this.$refs.oUlitem3.style.marginLeft = parseFloat(this.$refs.oUlitem3.style.marginLeft) + 296 + 'px'
      }
    },
    itemForwarditem3 () {
      if (parseFloat(this.$refs.oUlitem3.style.marginLeft) <= -592) {
        console.log('start')
        // break
      } else {
        this.$refs.oUlitem3.style.marginLeft = parseFloat(this.$refs.oUlitem3.style.marginLeft) - 296 + 'px'
      }
    },
    Video () {
      // var i = 1
      // if (i === parseFloat(1)) {
      //   console.log(i)
      //   i = 2
      //   console.log(i)
      // } else if (i === parseFloat(2)) {
      //   console.log(i)
      //   i = 1
      //   console.log(i)
      // }
      this.isVideo = !this.isVideo
    }

  }
}
</script>
