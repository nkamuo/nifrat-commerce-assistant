<template>
    <div>
        
        <q-card>
          <q-card-title>
            Product Repair Conditions
          </q-card-title>
          <q-card-separator />
          <q-card-main>
          
              <q-tabs color="base">
                <q-route-tab icon="list" to="/catalog/product-item" label="List" slot="title" exact/>
                <q-route-tab icon="add" to="/catalog/product-item/create" label="New" slot="title" exact/>

              </q-tabs>

        <transition>
        <router-view></router-view>
        </transition>
          </q-card-main>
        </q-card>
    </div>
</template>