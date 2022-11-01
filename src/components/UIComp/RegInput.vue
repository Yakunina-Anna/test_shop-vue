<template>

    <input :value="modelValue" @input="regInput" class="form__field" type="text" >
    <slot></slot>
     
    </template>
    
    <script>
    export default {
    name:'reg-input',
    props:{
      modelValue:[String,Number]
    },
    methods:{
      regInput(event){
        this.$emit('update:modelValue',event.target.value)
      }
    }
    }
    </script>
    
    <style lang="scss" scoped>
    .form{

      &__field {
      min-height: 45px;
      margin-bottom: 20px;
      padding-left: 17px;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      color: #b1b1b1;
      border: 0;
      outline: 1px solid #a4a4a4;
      &:focus {
         opacity: 0.5;
      }
   }
    }
    
    
    
    </style>