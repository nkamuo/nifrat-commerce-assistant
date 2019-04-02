<template>
    <div>
       <q-card>
         <q-card-title>
           Create a new Purchase Record
         </q-card-title>
         <q-card-separator />
         <q-card-main>
           <purchase-form v-model="purchase"></purchase-form>
         </q-card-main>
         <q-card-actions align="center">
           <q-btn icon="save" label="save" />
           <!--q-btn flat label="Action 2" /-->
         </q-card-actions>
       </q-card>
    </div>
</template>

<script>
import PurchaseForm from 'components/inventory/PurchaseForm.vue';

export default {
components: {PurchaseForm},
  data(){
    return {
      purchase: {},
    }
  }
    
}
</script>
