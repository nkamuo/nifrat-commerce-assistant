<template>
   <q-card>
     <q-card-title>
       <h4>Product List</h4>
     </q-card-title>
     <q-card-separator />
     <q-card-main>
      <q-pull-to-refresh :handler="refreshProducts">
         <q-infinite-scroll :handler="loadMoreProducts">
              <!--product-list-item v-for="(product, index) in products" :key="product.id" :product = "product"/-->
              <q-table
                :data="products"
                :columns="columns"
                row-key="id"
                selection="multiple"
                :selected.sync="selectedProducts"
                
                grid
                hide-bottom
                hide-header-
                separator="horizontal"
              />
              <q-spinner-dots  slot="message" :size="40"/>
         </q-infinite-scroll>
       </q-pull-to-refresh>
     </q-card-main>
   </q-card>
</template>


<script>
import ProductRepository from '../../../repositories/catalog/ProductRepository';

import axios from 'axios';
import { error } from 'util';


export default {
    data(){
        return {
            products: [{
                id:12,
                name: 'Tecno Y4 Black',
                sku: 'TCN-Y4-BLK'
            },{
                id:54,
                name:"Totek LED PAnel Light",
                sku:"TTK-LED-PNL"
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
                    name: 'sku',
                    required: true,
                    label: 'SKU',
                    align: 'left',
                    field: 'sku',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
 
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
            ],
            selectedProducts: [],
        }
    },

    methods: {
        loadMoreProducts(index,done){
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

            //this.testLoadMoreProducts();
            done();
        },

        refreshProducts(){
            this.products = [];
            this.loadMoreProducts();
        },

        testLoadMoreProducts(){
            var newProducts = [];
            var newProduct;
            var numToCreate = 10;

            for(var i = 0; i < numToCreate; i++){
                if(i == 0){
                    continue;
                }
                newProduct = {
                    id: i,
                    name: "New Product",
                    sku:  'SKU-TST-'+ i,
                    unitPrice: 100,
                }
                this.products.push(newProduct);
            }
            alert(this.products.length)
        }

    },
    mounted() {
        productRepository.getAll()
        .then(products => this.products = products)
        .catch(error => this.$q.notify("Error Loading Products"))
    },
}
</script>