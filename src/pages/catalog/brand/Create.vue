<template>
    <div>
       <q-card>
         <q-card-title>
           Create New Brand
           <span slot="subtitle">Sub</span>
         </q-card-title>
         <q-card-separator />
         <q-card-main>
            <brand-form v-model="productItem"></brand-form>
         </q-card-main>
       </q-card>
    </div>
</template>


<script>
import BrandForm from 'components/catalog/BrandForm.vue';

export default {
    components: {   BrandForm},
    data(){
        return {
            productItem: {},
        }
    }
}
</script>