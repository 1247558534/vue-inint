<template>
  <div class="VNavbar">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">最新</mt-tab-item>
      <mt-tab-item id="3">最热</mt-tab-item>
    </mt-navbar>
  </div>
</template>
<script>
import { Navbar } from "mint-ui";
export default {
  name: "VNavbar",
  data() {
    return {
      selected: "1"
    };
  },
  watch: {
    selected(nv, ov) {
      if(nv!=ov){
          this.$emit('change',nv)
      }
    }
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {},
  components: {}
};
</script>
<style  scoped lang='scss'>
</style>