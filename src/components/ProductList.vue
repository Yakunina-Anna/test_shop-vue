<template>
  <section class="products__inner">
    <h2 class="products__main-title">Наши товары</h2>
    <p class="products__description">В нашем магазине предоставлены последние новинки этого сезона</p>
    <div class="products__items">
        <product-item 
    v-for="product in products" 
    :key="product.id"
    :product="product"/>
    </div>
    
    
  </section>
 
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
    props:{
        products:{
            type:Array,
            required: true
        }
    },
    
}
</script>

<style lang="scss" scoped>
 @import '@/style/var';
 @import '@/style/mixin';
.products {
    &__inner {
      margin-top: 128px;
      
   }
   &__items{
    width: 100%;
        display: grid;
        grid-gap: 24px;
         grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));;
        align-items: center;
    // display: flex;
    //   flex-wrap: wrap;
    //   justify-content: center;
   }

   &__main-title {
      color: $fe-title;
      @include h2-title;
   }

   &__description {
      font-size: 14px;
      line-height: 17px;
      color: $products-description;
      text-align: center;
      margin-top: 6px;
      margin-bottom: 48px;
      font-weight: 400;
   }
}

</style>