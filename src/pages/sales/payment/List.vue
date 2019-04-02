<template>
    <div>
       <q-pull-to-refresh :handler="refreashPayments">
         <q-infinite-scroll :handler="loadMorePayments">
              <!--product-list-item v-for="(product, index) in products" :key="product.id" :product = "product"/-->
              <q-table
                title="Posts"
                :data="payments"
                :columns=" [
                {
                    name: 'id',
                    required: true,
                    label: 'ID',
                    align: 'left',
                    field: 'id',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'

                },
                {
                    name: 'title',
                    required: true,
                    label: 'Customer Name',
                    align: 'left',
                    field: 'customer.name',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                }
            ]"
                row-key="id"
              />
              <q-spinner-dots  slot="message" :size="40"/>
         </q-infinite-scroll>
       </q-pull-to-refresh>
    </div>
</template>

<script lang="ts">
export default {
    data(){
        return {
            payments: [
                {
                    id: 453,
                    title: "How To Build A Website"
                }
            ]
        }
    },

    methods: {
        loadMorePayments(){},
        refreashPayments(){}
    },
}
</script>