<template>
  <div id="app">
      
      <keep-alive >
         <router-view v-if='$route.meta.keepAlive'></router-view>
      </keep-alive>
      <router-view v-if='!$route.meta.keepAlive'></router-view>
    
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    setFontSize();
    $(window).resize(function() {
      setFontSize();
    });

    function setFontSize() {
      var deviceWidth = document.documentElement.clientWidth;
     
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
        document.body.style.fontSize = "14px"; // 在body上将字体还原大小，避免页面无样式字体超大

        // console.log(222)
      
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
