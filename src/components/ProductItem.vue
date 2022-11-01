<template>
    <article class="products__item">
        <div class="products__img">
            <img class="products__img-card" :src="product.img" alt="product">
            <div class="products__overlay">
                <product-btn/>
            </div>
        </div>
        <div class="products__content-title">
            <h3 class="products__title">{{product.title}}</h3>
            <p class="products__descr">{{product.desc}}</p>
            <span class="products__price">${{product.price}}</span>
           <!-- <img src="@/assets/product-item/${product.img}" alt=""> -->
        </div>
    </article>
   
 
</template>

<script>

export default {

    props:{
        product:{
            type:Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
 @import '@/style/var';
 @import '@/style/mixin';
   .products{
    &__item {
      width: 360px;
      margin-bottom: 30px;
      margin-right: 30px;
      position: relative;
      overflow: hidden;
      height: 100%;
      cursor: pointer;
      background-color: #f8f8f8;
      @include media("max", "sm") {
         margin-right: 0;
         margin-bottom: 16px;
         &--hidden {
            display: none;
         }
      }
      &:hover .products__overlay {
         opacity: 1;
         animation: bounce-in-top 0.8s;
         visibility: visible;
      }
     
   }
   &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 420px;
      background: $dark-overlay;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 0.5s;
      animation: slide-out-top 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      visibility: hidden;
   }
   &__content-title {
      background: $bgcd;
      text-align: left;
      padding: 25px 28px 20px 16px;
      position: relative;
      overflow: hidden;
   }
   &__title {
      margin-bottom: 12px;
      @include h3-title;
   }
   &__item:nth-child(3n) {
    margin-right: 0;
      @include media("max", "lp") {
         margin-right: 30px;
      }
      @include media("max", "sm") {
         margin-right: 0px;
      }
   }

   &__descr {
      font-weight: 300;
      font-size: 14px;
      line-height: 16.8px;
      color: $fe-desc;
   }

   &__price {
      margin-top: 18px;
      display: block;
      color: #f16d7f;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.2px;
   }
   
   }
  
</style>