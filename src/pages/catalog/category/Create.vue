<template>
    <div>
      <q-card>
        <q-card-title>
          <h4>Create a New Category</h4>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
         <catalog-category-form v-model="category" title="Create a New Category"/>
        </q-card-main>
        <q-card-actions vertical align="center">
          <q-btn  label="save" icon="save" color="indigo-10" />
        </q-card-actions>
      </q-card>
    </div>
</template>


<script>
import CatalogCategoryForm from 'components/catalog/CatalogCategoryForm.vue'

export default {
    components: {CatalogCategoryForm},
    data(){
        return{
            category:{
                name:"Smart Phones",
                slug:"smart_phones"
            }
        }
    },
    methods: {
        saveProduct(){
            
        }
    }
}
</script>
