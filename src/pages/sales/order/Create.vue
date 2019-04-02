<template>
    <div></br><br>
        <q-card>
          <q-card-title>
            Create New <b>Sales Order </b>  
          </q-card-title>
          <q-card-separator />
          <q-card-main>
             <order-form v-model="order"></order-form>
          </q-card-main>
          <q-card-separator/>
          <q-card-actions align="center">
          <q-btn icon="save">Save</q-btn>

          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import OrderForm from 'components/sales/OrderForm.vue';

export default {
        components: {OrderForm},
        data(){
            return {
                order: {}
            }
        }
}
</script>