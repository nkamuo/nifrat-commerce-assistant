<template>
    <div><br/><br/>
        <q-card>
          <q-card-title>
            Sales Orders
            <span slot="subtitle">Manager Sales Orders</span>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
           <q-tabs color="base" underlineColor="orange" towLines swipeable>
            <q-route-tab icon="list" to="/sales/order" slot="title" label="List Orders" exact/>
            <q-route-tab icon="add" to="/sales/order/create" slot="title" label="Add New" exact/>
           </q-tabs><br/>

            <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
                <router-view />
             </transition>
         </transition>
          </q-card-main>
        </q-card>
    </div>
</template>


<script>
import OrderList from 'components/sales/OrderList.vue'
export default {
    components: {OrderList},

    data(){
        return {}
    },

    methods:{
        newOrder(){}
    }
}
</script>