<template>
    <div>
       <q-card>
         <q-card-title>
           Create New Product Condition
           <span slot="subtitle"></span>
         </q-card-title>
         <q-card-separator/>
         <q-card-main>
            <product-condition-form v-model="productCondition"></product-condition-form>
         </q-card-main>
       </q-card>
    </div>
</template>


<script>

import ProductConditionForm from 'components/catalog/ProductConditionForm.vue';

export default {

    components: {   ProductConditionForm },
    data(){
        return {
            productCondition: {},
        }
    }
}
</script>