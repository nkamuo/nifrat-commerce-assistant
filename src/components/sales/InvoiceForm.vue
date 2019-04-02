<template>
    <div>
        <q-field
          icon="place"
          label="Billing Address"
          helper="The Billing Address"
          error-label="We need a valid email"
          :count="80"
        >
          <q-input v-model="invoice.address" type="textarea" float-label="Address" placeholder="Address" />
        </q-field>
    </div>
</template>


<script>
  export default {

      props: {
        invoice: {
          type: Object,
          required: true,
        }
      },
      model: {
        prop:"invoice",
        event: 'change',
      },


      data(){
        return {

        }
      },




      watch: {
        invoice(invoice){
          this.$emit('change',invoice);
        }
      }

  }
</script>