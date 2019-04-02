<template>
    <div><br/><br/><br/><br/>
        <q-card>
         <q-card-media>
           <img :src="product.baseImage" style="max-height:60%;ma-width:60%;" alt="Product Image">
         </q-card-media>
          <q-card-title>
            {{product.name}}
            <q-rating slot="subtitle" v-model="product.rating" :max="5" readonly/>
            <div slot="right">
                <i class=""></i>
            </div>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            
          </q-card-main>
        </q-card>
    </div>
</template>



<script>
import axios from 'axios';
import {Loading} from 'quasar';
import { setTimeout } from 'timers';

export default {
    props: {
        productId: {
            type:[String|Number],
            required: false,
        }
    },

    data(){
        return {
            product:  {
                    id:"jhksfald;sDJLJda",
                    name: "Totek LED Panel Light 12Watts White",
                    sku:  "Totek LED Panel Light 12Watts White",
                    unitPrice: 800,
                    rating: 4.5,
                    baseImage: "http://localhost:8000/images/product.jpg",
                }
        };
    },

    methods: {
        getProduct(productIid){
            axios.get(this.productUrl + productId)
                    .then(  data => {
                        var product = JSON.parse(data);

                        if(typeof product  !== 'object'){
                            this.$notify('Could not Load Product with [ID: ' + productIid + ']');
                        }
                    })
        }
    },

    watch: {
        productId(newValue){
            this.getProduct(newValue)
        }
    },

    computed: {
        isLoading(){
            return this.product? false : true;
        }
    },

    beforeRouteEnter(to, from, next) {
   
   axios.get('http://localhost:8080/catalog/products/create');
   Loading.show({
       message: "Loading Product",
       delay: 1200,
   });
    setTimeout(()=>{
        next();
    },1200)
    console.log(to)
    },


    beforeRouteLeave (to, from, next) {
        if(this.$q.loading.isActive){
            this.$q.loading.hide();
        }
        next();
    }

}
</script>
