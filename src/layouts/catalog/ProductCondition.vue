<template>
    <div>
        
        <q-card>
          <q-card-title>
            Brands
          </q-card-title>
          <q-card-separator />
          <q-card-main>
          
              <q-tabs color="base"  underlineColor="orange"  twoLines animated swipeable>
                <q-route-tab icon="list" to="/catalog/product-condition" label="List" slot="title" exact/>
                <q-route-tab icon="add"  to="/catalog/product-condition/create" label="New" slot="title" exact/>
              </q-tabs><br/><br/>

        <transition>
        <router-view></router-view>
        </transition>
          </q-card-main>
        </q-card>
    </div>
</template>