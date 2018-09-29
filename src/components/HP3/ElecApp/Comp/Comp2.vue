<template>
  <div>
    <li class="brick-item brick-item-2" :class="item(index)" v-for="(val , index) in 9" :key="index" style="background:rgba(0,0,0,.5);">
      {{val}}
      <!-- <div class="figure-img">
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
      <div :class="getClass(index)" class="flag" >{{val.flag}}</div> -->
    </li>
  </div>
</template>
<script>
export default {
  methods: {
    item (index) {
      if (index === 7 || index === 8) {
        return 'brick-item-s'
      }
    }
  }
}
</script>
