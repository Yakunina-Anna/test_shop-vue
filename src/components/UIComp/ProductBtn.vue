<template>
  <button class="products__btn">
    <img class="products__icon-cart" src="../../assets/icon-cart.svg">
    <span>Купить товар</span>
  </button>
</template>

<script>
export default {
name:"product-btn",
}
</script>

<style lang="scss" scoped>
.products{
    &__btn{
        opacity: 1;
      transition: all 0.5s ease;
      position: relative;
      font-size: 14px;
      left: 0;
      z-index: 1;
      color: #fff;
      outline: 1px solid;
      display: flex;
      font-size: 14px;
      width: 143px;
      height: 43px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
    }
    &__icon-cart {
      margin-right: 11px;
   }
}
</style>