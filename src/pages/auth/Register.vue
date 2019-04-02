<template>
    <div>
        <q-card>
          <q-card-title>
            <h4> Register</h4>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
              <q-field
                icon=""
                label="Your Firstname"
                helper=""
                error-label="We need a valid email"
                :count="20"
              >
                <q-input v-model="user.firstname" type="text" float-label="First Name" placeholder="First Name" />
              </q-field>

              <q-field
                icon=""
                label="Your Last Name"
                helper=""
                error-label="We need a valid email"
                :count="20"
              >
                <q-input v-model="user.lastname" type="text" float-label="Last Name" placeholder="Last Name" />
              </q-field>


                <q-field
                  icon=""
                  label="Your Email Address"
                  helper="A functional Email Adress"
                  error-label="We need a valid email"
                  :count="25"
                >
                  <q-input v-model="user.email" type="email" float-label="Email Address" placeholder="Email Address" />
                </q-field>

                <q-field
                  icon=""
                  label="choose Password"
                  helper="Password"
                  error-label="Enter a strong Password to protected your Account"
                >
                  <q-input v-model="user.password" type="password" float-label="Password" placeholder="Password" />
                </q-field>

                <q-field
                  icon=""
                  label="Comfirm Password"
                  helper="Reenter Your Password"
                  error-label="Passwords Don't Match"
                >
                  <q-input v-model="user.password_confirmation" type="password" float-label="Password Confirmation" placeholder="Password Confirmation" />
                </q-field>
          </q-card-main>
        </q-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {}
        }
    }
}
</script>