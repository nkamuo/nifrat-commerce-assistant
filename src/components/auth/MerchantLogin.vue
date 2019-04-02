<template>
    <div>
        <q-card>
          <q-card-title>
            Login to Manage Your Store
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
           <q-field
             icon="user"
             label="Username or Email"
             helper="Helper"
             :error="errors.has('username')"
             :error-label="errors.first('username')"
             :count="25"
           >
             <q-input name="username" v-model="username" type="text" float-label="Username" placeholder="Your Username or Email" />
           </q-field>

           <q-field
             icon="password"
             label="Password"
             helper="Helper"
             :error="errors.has('password')"
             :error-label="errors.first('password')"
           >
             <q-input name="password" v-model="password" type="password" float-label="Password" placeholder="Password" />
           </q-field>
          </q-card-main>
        </q-card>
    </div>
</template>


<script>
export default {
    
    data(){
        return {
            username: '',
            password: ''
        };
    }
    
}
</script>