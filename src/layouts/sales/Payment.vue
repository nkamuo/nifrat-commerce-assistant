<template>
    <div><br/><br/>
        <q-card>
          <q-card-title>
            <h4>Posts</h4>
            <span slot="subtitle"> Manage Posts</span>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
              <q-tabs color="base" align="left" underlineColor="orange"  swipeable>
                  <q-route-tab icon="list" to="/sales/payment" slot="title" label="List" exact/>
                   <q-route-tab icon="add" to="/sales/payment/create" slot="title" label="New" exact/>

              </q-tabs>

<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view />
    </transition>
          </q-card-main>
        </q-card>
    </div>
</template> 