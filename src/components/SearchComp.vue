<template>
    <button class="search__btn">
        <img class="search__img" src="../assets/search.svg" alt="search">
    </button>
    <form class="search__form" action="form">
     
        <product-input v-model="search"/>
    </form>
</template>

<script>
import ProductInput from './UIComp/ProductInput.vue'
export default {
  components: { ProductInput },
  data(){
    return{

        search:''
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/style/var';
 @import '@/style/mixin';
.search{
    &__btn{
        margin-left: 41px;
    }
    &__form{
      position: relative;
      transform: translate(10%, 10%);
      transition: all 1s;
      width: 220px;
      height: 50px;
      padding: 5px;
      opacity: 1;
     
}}


</style>