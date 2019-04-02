<template>
  <div id="q-app">
    <q-layout view="hHr LpR lFf">
    <top-bar/>
    <q-ajax-bar key="1" color="orange"/>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
      
    <q-page-container>
    <router-view/>
    </q-page-container>
    </transition>
    </q-layout>
  </div>
</template>

<script>
import './css/app.css'
import TopBar from 'components/TopBar.vue';

export default {
  name: 'App',

   components: {
    TopBar
  },

  created(){
    
  }
}
</script>

<style>
</style>
