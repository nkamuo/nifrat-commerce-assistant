<template>
    <div>
        <q-field
          icon=""
          label="Product"
          helper="Helper"
          error-label="We need a valid email"
        >
          <q-select
          v-model="productItem.product"
          float-label="Select Product"
          radio
         :options="products"
        />
        </q-field>

        <q-field
          icon=""
          label="Select Product Condition"
          helper="The Condition for this Product Item"
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
export default {
    
}
</script>