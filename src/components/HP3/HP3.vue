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
                  <!-- <li class="brick-item brick-item-2" v-for="(item , index) in 8" :key="index" >
                    {{item}}
                    <div :class="getClass(index)"  ></div>
                  </li> -->
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
  computed: {
    ...mapGetters('HP3', ['BrickList'])
  },
  methods: {
    getClass (index) {
      return 'flag-' + index
    }
  }
}
</script>
