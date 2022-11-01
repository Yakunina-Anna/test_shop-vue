<template>
<div class="container">
    
    <product-list :products="products"/>
    <main-btn>Посмотреть все товары</main-btn>
    
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
export default {
  components: {ProductList},
  name: 'App',
  data(){
    return{
      products:[
        {id:1,title:"Шорты Modern",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, architecto?",price:52.00,img:"@/assets/firstCard.jpg"},
        {id:2,title:" Брюки Classic",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, architecto?,",price:48.00,img:"@/assets/product-item/fe-card-2.jpg"},
        {id:3,title:" Брюки Classic",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, architecto?,",price:68.00,img:"@/assets/product-item/fe-card-3.jpg"}
      ]
    }
  }
}
</script>

<style>

</style>