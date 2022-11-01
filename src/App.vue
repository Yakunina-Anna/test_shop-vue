<template>
<header-vue />
<router-view></router-view>

</template>

<script>
import HeaderVue from './components/HeaderVue.vue';

export default {
  components: { HeaderVue },
  name: 'App',
 
}
</script>

<style>

</style>
