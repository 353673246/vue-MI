<template>

  <div class="ElecApp">

    <!-- 标题 -->
    <div class="box-hd">
      <h2 class="title">
        家电
      </h2>

      <!-- tab切换 -->
      <div class="more">
        <ul class="tab-list">
          <li v-for="(val , index) in tab" :key="index"  @mouseover="change(index)" :class="{active:active[index]}">
            {{val.name}}
          </li>
        </ul>
      </div>

      <!-- 内容 -->
      <div class="box-bd">
        <div class="row">

          <div class="span4">
            <ul class="brick-promo-list clearfix">
              <li class="brick-item" style="height:300px;padding:0px;">
                <img src="https://i1.mifile.cn/a4/xmad_15361148002852_yjEHC.jpg" alt  width="234px" height="300px">
              </li>
              <li class="brick-item" style="height:300px;padding:0px;">
                <img src="https://i1.mifile.cn/a4/xmad_15166222304108_QxWFY.jpg" alt width="234px" height="300px">
              </li>
            </ul>
          </div>

          <div class="span16">
            <ul class="brick-list clearfix">
              <component :is="who"></component>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Comp1 from './Comp/Comp1'
import Comp2 from './Comp/Comp2'
import Comp3 from './Comp/Comp3'
import Comp4 from './Comp/Comp4'
import './ElecApp.scss'
export default {
  components: {
    'com1': Comp1,
    'com2': Comp2,
    'com3': Comp3,
    'com4': Comp4

  },
  data () {
    return {
      active: [true, false, false, false],
      who: 'com1',
      tab: [
        {
          'name': '热门',
          'fnc': 'com1'
        },
        {
          'name': '电视影音',
          'fnc': 'com2'
        },
        {
          'name': '电脑',
          'fnc': 'com3'
        },
        {
          'name': '家居',
          'fnc': 'com4'
        }
      ]
    }
  },
  methods: {
    change (x) {
      for (let i = 0; i < this.active.length; i++) {
        this.active[i] = false
        this.active[x] = true
        this.who = this.tab[x].fnc
      }
      this.$set(this.active, 4, 0)
    }
  }
}
</script>
