import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    showFooter:true,
    changeNum:0

}

// this.$store.state.showFooter //获取它的参数值 （但是它不是最理想的方式）
// mapstate 帮助我们生成计算属性

const getters={
    isShow(state){
        return state.showFooter
    },
    getChangeNum(){
        return state.changeNum
    }
}

// 使用方法：
    // 1.在调用页面computed 返回 this.$store.getters.isShow
    // 2.在调用页面computed ...mapGetters([ 'getChangeNum' ]) mapGetters方法


const mutations = {
  show(state) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true;
  },
  hide(state) { //同上
    state.showFooter = false;
  },
  newNum(state, sum) { //同上，这里面的参数除了state之外还传了需要增加的值sum
    state.changableNum += sum;
  }
};
// this.$store.commit('newNum',6)
//  mapMutations

//异步
const actions = {
  hideFooter(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide');
  },
  showFooter(context) { //同上注释
    context.commit('show');
  },
  getNewNum(context, num) { //同上注释，num为要变化的形参
    context.commit('newNum', num)
  }
};

// this.$store.dispatch('getNewNum',6) //6要变化的实参
//  mapActions
const store = new Vuex.Store({
    state,
    getters
});

export default store;