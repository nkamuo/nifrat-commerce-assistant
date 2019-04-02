<template>
    <div>

         <q-btn  icon="add"  @click="modalNewProductConditionOpen = true">Create New Product Condition</q-btn><br/><br/>
        
        <div>
            <q-search v-model="productSearch" icon="search" placeholder="Search Products" clearable />
            <q-list highlight>
              <q-item v-for="product in productSearchResult"  :key="product.id" >
                <q-item-side :image="product.primaryImage"/>
                <q-item-main>{{product.name}}</q-item-main>
                <q-item-side right> {{product.basicUnitPrice}} </q-item-side>
              </q-item>
            </q-list>
        </div>


            <q-modal v-model="modalNewProductConditionOpen">
                <q-card>
                  <q-card-title>
                    New Product Condition
                  </q-card-title>
                  <q-card-separator />
                  <q-card-main>
                    <product-condition-form v-model="newProductCondition"></product-condition-form>
                  </q-card-main>
                  <q-card-separator />
                  <q-card-actions  align="center">
                    <q-btn  label="Save"   color="primary" />
                    <q-btn  label="Cancel" color="red" @click="modalNewProductConditionOpen = false"/>
                  </q-card-actions>
                </q-card>
            </q-modal>

            
        <q-field
          icon="bad"
          label="Repair Condition"
        >
            <q-select
              v-model="productItem.condition"
              float-label="Product Condition"
              radio
            :options="productConditions"
            />

        </q-field>
    </div>
</template>



<script>
import ProductConditionForm from './ProductConditionForm.vue';

export default {
    components:  { ProductConditionForm },
    model: {
        prop: 'productItem',
        event: 'change',
    },
    data(){
        return {
            productItem: {},
            productConditions:[
                { value:'brand_new',label:"Brand New"},
                { value: 'fairly_used', label: 'Fairly Used'},
                { value: 'used', label: 'Used'},
                { value: 'damaged',  label: "Damaged"}
            ],
            newProductCondition: {},
            productSearch: '',
            productSearchResult: [],
            modalNewProductConditionOpen: false,
        }
    },


    methods: {
        openModal(){
            this.openModal = true;
        }
    },

    watch: {
        productItem(value){
            this.$emit(value);
        }
    },
    
}
</script>