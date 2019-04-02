<template>
    <div><br/><br/>
       <q-card >
         <q-card-title>
           Login
         </q-card-title>
         <q-card-separator />
         <q-card-main>
          
           <q-field
          icon="user"
          label="Your Username/Email"
          helper=""
          error-label="We need a valid email"
          :count="10"
        >
          <q-input v-model="username" type="text" float-label="Username/Email" placeholder="Username/Email"/>
        </q-field>

        <q-field
          icon="password"
          label="Your Password"
          helper="Enter your Password"
          error-label="Incorrect Password"
        >
          <q-input v-model="password" type="password" float-label="Password" placeholder="Password" /><br/><br/>
        </q-field>
            <q-btn color="indigo-10" label="Sing In" @click="signIn"></q-btn>
            <router-link to="/register">
            <q-btn color="indigo-10"  label="Register"></q-btn>
            </router-link>

         </q-card-main>
       </q-card>
    </div>
</template>


<style scoped>

</style>


<script>
export default {
    name: '',
    data(){
        return {
            username:'',
            password: '',
        }
    },

    methods: {
        signIn(){

        }
    },
}
</script>