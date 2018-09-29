import vuex from 'vuex'
import Vue from 'vue'
import HP1 from './HP1'
import HP3 from './HP3'

Vue.use(vuex)

export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    HP1,
    HP3
  }
})
