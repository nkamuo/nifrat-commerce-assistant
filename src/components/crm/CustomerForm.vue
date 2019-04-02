<template>
    <div>
        
        <q-field
          icon=""
          label="Firstname"
          helper="Required"
          :error="errors.has('firstname')"
          error-label="This Field is Required"
          :count="25"
        >
          <q-input name="firstname" v-validate="{required:true}" v-model="customer.firstname" type="text" float-label="Firstname" placeholder="Firstname" />
        </q-field><br/>

       
        <q-field
          icon=""
          label="Lastname"
          helper="Optional"
          error-label="We need a valid Lastname"
          :count="25"
        >
          <q-input v-model="customer.lastname" type="text" float-label="Lastname" placeholder="Lastname" />
        </q-field><br/>


           <q-field
          icon=""
          label="Other Name(Middlename)"
          helper="optional"
          error-label=""
          :count="25"
        >
          <q-input v-model="customer.middlename" type="text" float-label="Other Name" placeholder="Other Name" />
        </q-field><br/>


        <q-field
          icon="email"
          label="Customer's Email"
          helper="Optional"
          error-label="We need a valid email"
          :count="25"
        >
          <q-input v-model="customer.email" type="email" float-label="Email" placeholder="Email" />
        </q-field><br/>


        <q-field
          icon="phone"
          label="Customer's Phone"
          helper="Customer's Phone Number(Optional)"
          error-label="We need a valid email"
          :count="50"
        >
          <q-input v-model="customer.phone" type="tel" float-label="Phone" placeholder="Phone" />
        </q-field><br/>

    </div>
</template>

<script>
export default {
    props: {
      customer: {
        type: Object,
        required: true,
      }
    },
    model: {
      prop: 'customer',
      event: 'change',
    },

    data(){
        return {
            
        }
    },

    methods: {

      validate(){
        return this.$validator.validate();
      }
    },

    watch: {
      customer(customer){
        this.$emit('change',customer);
      }
    }
}
</script>