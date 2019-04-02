<template>
    <div>
        <invoice-form ref="invoiceForm" v-model="invoice"/>
    </div>
</template>


<script>
import InvoiceForm from 'components/sales/InvoiceForm.vue';

export default {
    components: {InvoiceForm},

    data(){
    	return {
    	 	invoice: {}
    	}
    }
}
</script>