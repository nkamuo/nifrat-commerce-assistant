<template>
    <div>
       <q-card>
         <q-card-title>
           {{title}}
         </q-card-title>
         <q-card-separator />
         <q-card-main>
            <q-table
          title="Table Title"
          :data="orders"
          :columns="[{
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
                    name: 'customerName',
                    required: true,
                    label: 'Customer Name',
                    align: 'left',
                    field: 'customerName',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
]"
          row-key="id"
        >
        </q-table>
         </q-card-main>
       </q-card>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default:"Orders List"
        },
        orders:{
            type: Array,
            require:true,
        },
    },
    data(){
        return {

        }
    }
}
</script>