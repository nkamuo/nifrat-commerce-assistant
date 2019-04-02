<template>
  <!--q-page-->
    <div>
      <q-toggle v-model="product.enable" val="one" label="One" />
      <q-input v-model="product.name" type="text" float-label="Float Label" placeholder="Name of this product" />
      <q-input v-model="product.sku" type="text" float-label="SKU Label" placeholder="SKU this Product"/>
      <q-input v-model="product.unitPrice" type="number" float-label="Unit Pricet Label" placeholder="Unit Price" />
      <q-rating v-model="product.rating" :max="5"/>
    </div>
  <!--/q-page-->
</template>

<style scoped>

</style>

<script>
export default {
  name: 'CreateProductForm',
  data () {
    return {
      product: {
        name: 'Totek LED Panel Light',
        sku: 'TTK-PNL.L-LED',
        unitePrice: 24000,
        rating:4,
      }
    }
  },

  methods: {
    saveProduct: function () {

    }
  }
}
</script>
