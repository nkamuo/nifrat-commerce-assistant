<template>
    <div>
        
        <q-card>
          <q-card-title>
            Brands
          </q-card-title>
          <q-card-separator />
          <q-card-main>
          
              <q-tabs color="base"  underlineColor="orange"  twoLines animated swipeable>
                <q-route-tab icon="list" to="/catalog/brand" label="List Brands" slot="title" exact/>
                <q-route-tab icon="add" to="/catalog/brand/create" label="Add New" slot="title" exact/>
              </q-tabs><br/><br/>

        <transition>
        <router-view></router-view>
        </transition>
          </q-card-main>
        </q-card>
    </div>
</template>