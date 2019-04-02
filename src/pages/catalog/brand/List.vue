<template>
    <div>
        <q-table
          title="Brands"
          :data="brands"
          :columns="[{
              label: 'ID',
              field: 'id',
              required: true,
          },
          {
              label: 'Name',
              field: 'name',
              required: true,
          },
          {
              label: 'Slogan',
              field: 'slogan',
              required: false,
          }]"
          row-key="id"
        />
    </div>
</template>


<script>
export default {
    data(){
        return {
            brands:[]
        }
    }
}
</script>