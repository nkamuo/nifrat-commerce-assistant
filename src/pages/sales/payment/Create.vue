<template>
    <div><br/><br/>
        <q-card>
          <q-card-title>
            Create New Payment
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <payment-form v-model="payment"/>
          </q-card-main>
        </q-card>
    </div>
</template>

<script>
import PaymentForm from 'components/sales/PaymentForm.vue'
export default {
    components: {PaymentForm},

    data(){
      return {
        payment: {}
      }
    }
}
</script>