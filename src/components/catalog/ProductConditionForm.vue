<template>
   
       <div>
        <q-toggle v-model="productCondition.enabled" :val="true" label="Enabled" />

        <q-field
          icon=""
          label="Code"
          helper="A System Requirement"
          error-label="This Field Is Required"
        >
          <q-input v-model="productCondition.code" type="text" float-label="Code" placeholder="Code" />
        </q-field>

        <q-field
          icon=""
          label="Title"
          helper="The Title for this Product Condition"
          >
          <q-input v-model="productCondition.title" type="text" float-label="Title" placeholder="Title" />
        </q-field>

        <q-field
          icon=""
          label="Label"
          helper="A short Label displayed to product Items in this Condition"
          :count="15"
        >
          <q-input v-model="productCondition.label" type="text" float-label="Label" placeholder="Label" />
        </q-field>
    </div>
    
</template>

<script>
//import('@ckeditor/ckeditor5-build-inline')

export default {
    data(){
        return {
            productCondition:{}
        }
    }
}
</script>