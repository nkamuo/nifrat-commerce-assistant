<template>
   <q-card>
     <q-card-title>
         <h3> Create a New Product</h3>
     </q-card-title>
     <q-card-separator />
     <q-card-main>
       <product-form v-model="product" ref="productForm"/>
     </q-card-main>
     <q-card-separator />
     <q-card-actions vertical align="center">
       <q-btn label="Create" icon="add" color="base" style="border-color:orange" @click="saveProduct"></q-btn>
     </q-card-actions>
   </q-card>
</template>


<script>
import ProductForm from 'components/catalog/ProductForm.vue';
//import  ProductForm from '@/components/catalog/product/ProductForm.vue'

export default {
    components: {
        ProductForm,
    },
    data(){
        return {
            product: {},
        }
    },

    methods: {
        saveProduct(){
           this.$refs.productForm.save(this.product)
            .then((product)=>{
                this.$q.notify("Product Saved")
            })
            .catch((err)=>{
                this.$q.notify("Could Not Save Product. "+err);
            })
        }
    },

    watch: {
        product(){
        //    alert('Product Changed');
        }
    }
}
</script>
