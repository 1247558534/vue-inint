import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import $ from 'jquery'

import common from './until/common'
import until from './until/until'


import './assets/stylus/reset.css'
import './assets/stylus/border.css'

import api from './api/api'


Vue.prototype.$api = api

import FastClick from 'fastclick'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(until)
Vue.prototype.$common = common;

import {
  Toast
} from 'mint-ui';

Vue.prototype.$toast=(message,position='center',duration='5000')=>{
    if(!message){
        return
    }else{
         Toast({
           message: message,
           position: position,
           duration: duration
         });
    }
       
}

import store from './store' //引入store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


