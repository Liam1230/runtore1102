import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  offset: -100 // 固定ヘッダーがある場合に、オフセットで調整する
})