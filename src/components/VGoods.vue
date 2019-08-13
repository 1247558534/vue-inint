<template>
 <div class="VGoods">
     <div v-for='(item,index) in list' :key='index' class='item'>
       {{item}}
    </div>
 </div>
</template>
 
<script>
export default {
 name: 'VGoods',
 data () {
    return {
        list:[1,2,3,4,5,6,7,8,9,9,9,2,2,3,3,4,5,6,6,7,8,7,7,7]
    }
 }
}
</script>
 
<style scoped lang = "sass">
 
</style>