<template>
  <div>
    <li class="brick-item brick-item-2" v-for="(val , index) in ElecAppItem1" :key="index" :class="item(index)">
      <!-- {{val}} -->
      <div class="figure-img" :class="index === 7 ? 'figure-img-s' : ''">
        <img :src="val.src" alt=""  :width="index === 7 ? '80' : '160'" :height="index === 7 ? '80' : '160'">
      </div>
       <h3 class= "title">
        {{val.name}}
      </h3>
      <p class="desc">{{val.desc}}</p>
      <p class="price">
        <span class="num">{{val.price}}</span>
        元
      </p>
      <div  class="flag" :style="val.backCol">{{val.flag}}</div>
      <div :class="index === 7 ? '' : 'review-wrapper'">
        <a href="">
          <span class="review">
            {{val.review}}
          </span>
          <span class="author">
            {{val.author}}
          </span>
        </a>
      </div>
    </li>
    <li class="brick-item brick-item-2 brick-item-s" >
       <tem1></tem1>
    </li>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
var tem1 = {
  template: "<a class='more'>浏览更多<small>热门</small><Icon type='md-arrow-forward' /></a>"
}
export default {
  components: {
    tem1
  },
  computed: {
    ...mapGetters('HP3', ['ElecAppItem1'])
  },
  methods: {
    item (index) {
      if (index === 7 || index === 8) {
        return 'brick-item-s'
      }
    }
  }
}
</script>
