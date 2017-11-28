/***************************************/
/*  name:    vuex-state
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/
import Vue from 'vue';
import VueX from 'vuex';
import getters from './getters.js';
import state from './state.js';

Vue.use(VueX);

export default new VueX.Store({
  getters,
  state
})
