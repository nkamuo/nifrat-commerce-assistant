<template>
    <div>
        <q-card>
          <q-card-title>
            Login as an Employee
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
           <q-field
             icon="person"
             label="Enter Username"
             helper=""
             :error="errors.has('username')"
             :error-label="errors.first('username')"
           >
             <q-input name="username" v-validate="'required'" data-vv-as="Username" v-model="username" type="text" float-label="Username" placeholder="Your Username" />
           </q-field>

           <q-field
             icon="lock"
             label="Enter Password"
             :error="errors.has('password')"
             :error-label="errors.first('password')"
           >
             <q-input name="password" v-validate="'required'" data-vv-as="Password" v-model="password" type="password" float-label="Password" placeholder="Password" />
           </q-field>

          </q-card-main>
          <q-card-separator/>
          <q-card-actions align="center
          ">
          <q-btn v-on:click="login" title="Procced to login" color="base" style="">SignIn</q-btn>
          </q-card-actions>
        </q-card>
    </div>
</template>


<script>
import axios from 'axios';

export default {

    data(){
        return {
            username: '',
            password: '',
            file: null,
        };
    },

    methods: {
        login(username,password){

          this.$validator.validate();
          console.log(this.file)

            axios.post('/store/employee/login',{
              username, password
            }).then( data => {

              alert(data)

            }).catch(err => {

            })
        },


    },
    
}
</script>