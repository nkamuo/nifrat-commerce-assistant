<template>
   <q-card>
     <q-card-title>
       <h4>Category List</h4>
     </q-card-title>
     <q-card-separator />
     <q-card-main>
      <q-pull-to-refresh :handler="refreshCategories">
         <q-infinite-scroll :handler="loadMoreCategories">
              <!--product-list-item v-for="(product, index) in products" :key="product.id" :product = "product"/-->
              <q-table
                title="Categories"
                :data="products"
                :columns="columns"
                row-key="id"
                selection="multiple"
                :selected.sync="selectedCategories"
                dense
                grid
              />
              <q-spinner-dots  slot="message" :size="40"/>
         </q-infinite-scroll>
       </q-pull-to-refresh>
     </q-card-main>
   </q-card>
</template>


<script>
import axios from 'axios';


export default {
    data(){
        return {
            products: [{
                id:12,
                name: 'Electronics',
                parent: null
            },
            {
                id:54,
                name:"Phones and Tablets",
                parent:"Electronics"
            },
            {
                id:653,
                name:"Women Wears",
                parent:"Fashion"
            }
            ],
            productUrl: 'http://localhost:8000/catalog/products',
            columns:[
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
                    name: 'name',
                    required: true,
                    label: 'Name',
                    align: 'left',
                    field: 'name',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },

                {
                    name: 'parent',
                    required: false,
                    label: 'Parent',
                    align: 'left',
                    field: 'parent',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
 /*
                {
                    name: 'baseImage',
                    required: true,
                    label: 'Base Image',
                    align: 'left',
                    field: ' baseImage',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
                */
            ],
            selectedCategories: [],
        }
    },

    methods: {
        loadMoreCategories(index,done){
            console.log(index);

            return;

            axios.get(this.productUrl + '?page=' + index,{
                headers: {
                    accept: "application/json"
                }
            })
                    .then(dataString => {
                        var data = JSON.parse(dataString);
                        if(!Array.isArray(data)){
                            throw new Error('Invalid Response');
                        }
                        this.products.concat(data);
                        //call the method telling that refresh is do
                        done();
                    })

            //this.testLoadMoreCategories();
            done();
        },

        refreshCategories(){
            this.products = [];
            this.loadMoreCategories();
        },

        testLoadMoreCategories(){
            var newCategories = [];
            var newCategory;
            var numToCreate = 10;

            for(var i = 0; i < numToCreate; i++){
                if(i == 0){
                    continue;
                }
                newCategory = {
                    id: i,
                    name: "New Category",
                    sku:  'SKU-TST-'+ i,
                    unitPrice: 100,
                }
                this.products.push(newCategory);
            }
            alert(this.products.length)
        }

    }
}
</script>