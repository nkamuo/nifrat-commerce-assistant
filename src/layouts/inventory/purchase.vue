<template>
    <div>
        <q-card>
          <q-card-title>
            <h4>Purchases</h4>
            <span slot="subtitle"> Manage Puchase Records</span>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
              <q-tabs color="base"  underlineColor="orange"  swipeable>
                  <q-route-tab icon="list" to="/inventory/purchase" slot="title" label="List" exact/>
                   <q-route-tab icon="add" to="/inventory/purchase/create" slot="title" label="New" exact/>

              </q-tabs>


<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view />
    </transition>

          </q-card-main>
        </q-card>
    </div>
</template>