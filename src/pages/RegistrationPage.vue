<template>
   <section class="breadcrumb">
      <div class="container">
         <div class="breadcrumb__content">
            <h1 class="breadcrumb__title">REGISTRATION</h1>
         </div>
      </div>
   </section>
   <section class="registration">
      <div class="container">
         <div class="registration__inner">
            <reg-form/>
         </div>
      </div>
   </section>
</template>

<script>
import RegForm from '@/components/RegForm.vue'
export default {
  components: { RegForm },

   name: 'main-page',
   }
</script>

<style lang="scss" scoped>
@import '@/style/var';
 @import '@/style/mixin';
.breadcrumb {
   min-height: 148px;
   background-color: $context;
   display: flex;
   align-items: center;
   margin-top: 75px;
   padding: 0 16px;
   @include media("max", "sm") {
      padding: 0;
   }

   &__content {
      display: flex;
      justify-content: space-between;
      @include media("max", "xs") {
         justify-content: center;
         flex-direction: column;
         text-align: center;
      }
   }

   &__title {
      line-height: 28.8px;
      font-size: 24px;
      font-weight: 400;
      color: $desc;
      @include media("max", "xs") {
         margin-bottom: 32px;
      }
   }
  }
  .registration {
   &__inner {
      display: flex;
      justify-content: space-between;
      margin-top: 64px;
      margin-bottom: 96px;
      @include media("max", "xs") {
         display: block;
         margin: 0 auto;
         margin-bottom: 96px;
         margin-top: 40px;
      }
   }
}


</style>