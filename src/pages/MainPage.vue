<template>
<div class="container">
    
    <product-list :products="products"/>
    <router-link to="/about">
      <main-btn>Посмотреть все товары</main-btn>
   </router-link>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
export default {
  components: {ProductList},
  name: 'main-page',
  data(){
    return{
      products:[
        {id:1,title:"Шорты Modern",price:52.00,img:"@/assets/firstCard.jpg"},
        {id:2,title:" Брюки Classic",price:48.00,img:"@/assets/product-item/fe-card-2.jpg"},
        {id:3,title:" Брюки Classic",price:68.00,img:"@/assets/product-item/fe-card-3.jpg"}
      ]
    }
  }
}
</script>

<style>

</style>