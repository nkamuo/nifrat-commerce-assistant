<template>
    <div>
        <product-form v-model="product"/>
    </div>
</template>


<script>
import ProductForm from '../../../components/catalog/ProductForm.vue';
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

    watch: {
        product(){
        //    alert('Product Changed');
        }
    }
}
</script>
