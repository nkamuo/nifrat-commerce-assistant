<template>
    <div>
        <q-field
          ref="unit_name-field"
          icon="name"
          label="Stock Unit Name"
          helper="Enter the name for this Stock Unit"
          :error=""
          error-label="We need a valid email"
          :count="25"
        >
          <q-input v-model="unit.name" type="text" float-label="Stock Unit Name" placeholder="Name" />
        </q-field>

        <q-field
          icon=""
          label="Stock Unit Code"
          helper="A system specific name for this unit"
          :error=""
          error-label=""
          :count="15"
        >
          
        </q-field>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'unit',
        event: 'change',
    },
    data(){
        return {
            unit: {},
        };
    },

    methods: {

    },

    watch: {
        unit(){
            this.$emit('change');
        }
    }

}
</script>