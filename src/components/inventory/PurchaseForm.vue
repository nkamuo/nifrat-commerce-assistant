<template>
    <div>
      <q-btn  icon="add" label="Create Supplier" @click="modalNewSupplierFormOpen = true" style="float:right;"></q-btn><br>
    <q-search v-model="supplierSearch" icon="person" float-label="Supplier" placeholder="Search Supplier" clearable />

      <q-btn color="primary" icon="add" label="new item" @click="modalNewItemFormOpen = true"></q-btn>

      <q-table
        title="Items Purchases"
        :data="purchase.item"
        :columns="[
        {label: 'Product Name'},
        {label: 'Product Condition'}
        ]"
        row-key="name"
      /><br/><br/><br/>

    <q-field
      icon="event"
      label="Purcase Date"
      helper="The Date for  this Purchase"
      error-label="We need a valid email"
    >
      <q-datetime v-model="purchase.date" type="date" />
    </q-field>

    <q-field
      icon="payment"
      label="Invoice Numbers"
      helper="Enter the Invoice Numbers"
      error-label="We need a valid email"
      :count="10"
    >
      <q-chips-input type="text" v-model="purchase.invoiceNumbers" float-label="Invoice Numbers" upper />
    </q-field>

    </div>
</template>





<script>
export default {
    data(){
      return {
        purchase: {invoiceNumbers:[]},

        supplierSearch: '',

        modalNewSupplierFormOpen: false,
        modalNewItenFormOpen: false,
      }
    }
}
</script>