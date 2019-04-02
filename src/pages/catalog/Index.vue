<template>
    <div>
        <q-pull-to-refresh :handler="refresher">
         <q-infinite-scroll :handler="loadMoreProducts">
            <q-layout view="hHr LpR lFf">
                <q-layout-drawer v-for="(product, index) in products" :key="index" side="getSide(index)">
                    <catalog-product-grid-item :product="product"/>
                </q-layout-drawer>
            </q-layout>
         </q-infinite-scroll>
        </q-pull-to-refresh>
    </div>
</template>


<script>
export default {

methods:{
    refresher(){

    },

    loadMoreProducts(){

    }
}
    
}
</script>
