<template>
    <div><br/><br/>
        <q-card>
          <q-card-title>
            <h4>Posts</h4>
            <span slot="subtitle"> Manage Posts</span>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
              <q-tabs color="base" align="justify" underlineColor="orange"  swipeable>
                  <q-route-tab icon="list" to="/cms/post" slot="title" label="List" exact/>
                   <q-route-tab icon="add" to="/cms/post/create" slot="title" label="New" exact/>

              </q-tabs>

    <q-page-container>

<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view />
    </transition>
    </q-page-container>
          </q-card-main>
        </q-card>
    </div>
</template> 