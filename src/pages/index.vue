<template>
 <div class="homePage">
    <VNavBar ref='navbar' @change='change' class='navbar'></VNavBar>
    
     
    <div class='content'>
        <!-- <keep-alive :include="['VList','VGoods']">
             <component  :is="currentCom"></component>
        </keep-alive>
         -->
       <div>{{$store.state.changeNum}}</div>
       <div>{{isShow}}</div>
       <div>{{getChangeNum}}</div>
       <div>新增内容，测试合并请求</div>
       <div>今天星期一</div>
    </div>
    <!-- <router-link to="/other">点击</router-link> -->
       
 </div>
</template>
 
<script>
import VNavBar from '@/components/VNavBar'
import VList from '@/components/VList'
import VGoods from '@/components/VGoods'
import {mapGetters,mapState} from 'vuex'
export default {
 name: 'homePage',
 data () {
 return {
     list:[],
     selected:'',
     currentCom:'VList'
    
    }
 },
 created(){
 },
 mounted(){
     this.inint();
     this.selected=this.$refs.navbar.selected;
    //  console.log('vuex',this.$store.state.changeNum)
 },
 activated(){
 },
 computed:{
     isShow(){
         return this.$store.getters.isShow
     },
     ...mapGetters([
         'getChangeNum'
     ])
    
 },
 methods:{
     change(number){
         this.selected=number;
         if(this.selected==1){
             this.currentCom='VList'
         }else{
             this.currentCom='VGoods'
         }
         
     },
     async inint(){
          let res= await this.$api.getHomeData();
          this.list=res.body;

     }
 },
 components:{
     VNavBar,
     VList,
     VGoods
 }
}
</script>
<style lang="scss" scoped>
.content{
   margin-top: 1.2rem;
}
.navbar{
    position: fixed;
    width: 100%;
    top: 0;
}

</style>