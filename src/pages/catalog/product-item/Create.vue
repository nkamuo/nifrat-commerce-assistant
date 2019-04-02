<template>
    <div>
       <q-card>
         <q-card-title>
           Create New Product Condition
           <span slot="subtitle">Sub</span>
         </q-card-title>
         <q-card-separator />
         <q-card-main>
            <product-item-form v-model="productItem"></product-item-form>
         </q-card-main>
       </q-card>
    </div>
</template>


<script>
import ProductItemForm from 'components/catalog/ProductItemForm.vue';

export default {
    components: {   ProductItemForm},
    data(){
        return {
            productItem: {},
        }
    }
}
</script>