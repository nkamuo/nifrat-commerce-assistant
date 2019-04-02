<template>
  <!--q-layout view="lHh Lpr lFf"-->
  <div>
    <q-layout-header>
      <q-toolbar
        color="base"
        was-:glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="navbarOpen = !navbarOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Nifrat
          <div slot="subtitle">Designed and Built By Calistus Nkamuo</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
<navbar v-model="navbarOpen"/>
   
  </div>
</template>

<script>
import { openURL } from 'quasar'
import Navbar from './Navbar.vue'

export default {
  components:{Navbar},
  data () {
    return {
      navbarOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    pushRoute (path) {
      this.$router.push(path)
    }

  }
}
</script>

<style>
</style>
