<template>
    <div>
        <q-card>
          <q-card-title>
            <h4>Categories</h4>
            <span slot="subtitle"> Manage Your Categories</span>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
              <q-tabs color="base"  underlineColor="orange"  swipeable>
                  <q-route-tab icon="list" to="/catalog/category" slot="title" label="List" exact/>
                   <q-route-tab icon="add" to="/catalog/category/create" slot="title" label="New" exact/>

              </q-tabs><br/><br/>


<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view />
    </transition>
          </q-card-main>
        </q-card>
    </div>
</template>