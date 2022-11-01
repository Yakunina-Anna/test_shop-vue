<template>

<input :value="modelValue" @input="searchInput" class="search-field" type="search" placeholder="Search....">

 
</template>

<script>
export default {
name:'product-input',
props:{
  modelValue:[String,Number]
},
methods:{
  searchInput(event){
    this.$emit('update:modelValue',event.target.value)
  }
}
}
</script>

<style lang="scss" scoped>
.search-field {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 42.5px;
      line-height: 30px;
      outline: 0;
      border: 0;
      // display: none;
      font-size: 1em;
      border-radius: 20px;
      padding: 0 20px;
      transition: all 1s;
      &::after {
         top: 0;
         left: 0;
         width: 25px;
         height: 2px;
         border: none;
         background: white;
         border-radius: 0%;
         transform: rotate(-45deg);
      }
   }


</style>