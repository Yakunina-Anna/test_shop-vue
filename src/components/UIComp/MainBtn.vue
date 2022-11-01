<template>
    <button class="btn">
     <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
  name:'main-btn'
  }
  </script>
  
  <style lang="scss" scoped>
  @import '@/style/var';
  .btn{
    display: flex;
    outline: 1px solid $button;
    max-width: 212px;
    padding: 12px;
    transition: all 0.5s ease;
    color: $text-button;
    align-items: center;
    justify-content: center;
    margin: 48px auto 64px auto;
  }
  .btn:hover{
    color: #fff;
    background-color: $button;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  </style>