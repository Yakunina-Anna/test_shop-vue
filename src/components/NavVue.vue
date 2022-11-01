<template>
    <div class="menu__items">
       
            <router-link class="menu__link"
            v-for="link in links" 
            :key="link.id" 
            :to="link.put">
            {{link.title}}
            </router-link>
       
    </div>
  <div class="menu__link" >

  </div>
</template>

<script>
export default {
  name:"nav-vue",
  data(){
    return{
      links:[
        {id:1,title:"Главная",put:"/"},
        {id:2,title:"Регистрация",put:"/about"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/var';
 @import '@/style/mixin';
 router-link  {
    text-decoration: none;
}
.menu{
    
    &__link{
        color:$f-text;
        text-transform: uppercase;
    }
    &__link:not(:last-child){
        margin-right: 10px;
      
    }
}
</style>
