<template>

  <header class="header">
    <div class="header__inner">
      <div class="container">
        <div class="header__topline">
          <div class="header__topline-left">
              <router-link to="/" class="logo">
                
                <img class="header__logo" src="../assets/logo.svg" alt="logo">
              </router-link>
              
              <search-comp/>
          </div>
          <div class="header__topline-right">
         <nav-vue/>
          </div>
        </div>

        
      </div>
     
    </div>
    
   
  </header>
  
</template>

<script>
import SearchComp from './SearchComp.vue'
import NavVue from './NavVue.vue'
export default {
  components: { SearchComp,NavVue},
name:"header-vue",
}
</script>

<style lang="scss" scoped>
@import '@/style/var';
 @import '@/style/mixin';
.header{
  &__inner{
  
      background-color: $header;
      min-height: 75px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      position: fixed;
      top: 0;
      z-index: 99999;
      width: 100%;
   
  }
  &__topline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
   }

   &__topline-left {
      display: flex;
      align-items: center;
      width: 80%;
   }

   &__logo {
    margin-right: 20px;
   }
   
}
</style>