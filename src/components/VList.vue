<template>
    <div class='VList'>
        <div v-for='(item,index) in list' :key='index' class='item'>
        
            <router-link to="/other" > {{item}}</router-link>
        </div>
    </div>
</template>

<script>

export default {
name: 'VList',
data() {
    return {
        list:[1,2,3,4,5,6,7,8,9,0,1,2,3,5,6,7,8,9,0,0,1,2,3,4,5]
    };
},
watch: {},
methods: {
    async inint(){
          let res= await this.$api.getHomeData();
          this.list=res.body;

     }
},
created() {

},
mounted() {
    //  this.inint();
    console.log('mounted')

},
activated(){
    console.log('activated')
 },
computed: {},
components: {},
props:{
    // list:{
    //     type:Array,
    //     default:[]
    // }
}
}
</script>
<style  scoped lang='less'>
    .item{
        margin: 0.5rem 0;
    }
</style>