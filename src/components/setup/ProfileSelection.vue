<template>
<div><br/><br/>
	<q-card>
      <q-card-title>
       Profile Selection
      </q-card-title>
      <q-card-separator />
      <q-card-main style="width: 80%;">
      <small> How would you like to use <b>Nifrat Commerce Assistant?</b></small><br/><br/>
        <div>
        <q-field
        :error="errors.has('profile')"
         error-label="You must select a Profile"
        >
            <q-radio name="profile" v-model="profile" :val="1" label="Offline Mode" v-validate="'required'" default></q-radio><small>(offline usage only)</small><br><br/>

            <q-radio name="profile" v-model="profile" :val="2" label="New Synced Account"/><small>(create a new online account)</small><br><br/>

            <q-radio name="profile" v-model="profile" :val="3" label="Synced Account Login"/><small>(login to already existing online account)</small><br/>
        </q-field>
        </div>
      </q-card-main>
      <q-card-separator/>
      <q-card-actions>
      <q-btn>Prevous</q-btn>
      <q-btn v-on:click="next">Next</q-btn>
      <q-btn v-on:click="cancel" color="red">Cancel</q-btn>
      </q-card-actions>
    </q-card>
</div>
</template>

<script>

import {openURL} from 'quasar'

export default {
    
    data(){
      return {
        profile: 1
      }
    },
    methods: {
      next(){

        this.$validator.validate();

        switch(this.profile){
          case 1 :
              
            break;
          case 2 :
            openURL('http://localhost:8000/store/merchant/register?redirect=""')
            break;
          case 3 :
                this.$router.push('/auth/login')
            break;

          default: 
        }
      },

      cancel(){
        window.close();
      }
    }
}
</script>