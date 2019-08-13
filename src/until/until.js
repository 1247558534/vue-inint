export default {
  install: function (Vue, opt) {
    Vue.prototype.$change = function (number) {
        console.log(77);
      },
      Vue.prototype.$add = function (number) {
        console.log(++number);
      }

  }
}