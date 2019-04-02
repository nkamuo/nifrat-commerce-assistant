<template>
  <q-card>
    <br><br><br>
    <q-card-title>
      Product
      <span slot="subtitle">Manage Your Products</span>
    </q-card-title>
    <q-card-separator />
    <q-card-main>
    

      <q-tabs color="base" underlineColor="orange"  twoLines animated swipeable>
        <q-route-tab
          slot="title"
          icon="list"
          to="/catalog/product"
          label="View Products"
        />
        <q-route-tab
          slot="title"
          icon="add"
          to="/catalog/product/create"
          label="Create New"
        />

         <q-route-tab
          slot="title"
          icon="settings"
          to="/configuration/catalog/products"
          label="Configurations"
        />
      </q-tabs><br><br>
   
    <!--q-page-container>
      <!-- This is where pages get injected -->
     <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view />
    </transition>
    <!--/q-page-container-->

    </q-card-main>
  </q-card>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
