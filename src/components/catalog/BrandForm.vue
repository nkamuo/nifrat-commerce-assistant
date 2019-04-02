<template>
    <div>
        
        <q-field
          icon=""
          label="Brand Name"
          helper=""
          error-label="We need a valid email"
          :count="25"
        >
          <q-input v-model="brand.name" type="text" float-label="Brand Name" placeholder="Name of Brand"  required/>
        </q-field>

        <q-field
          icon=""
          label="Slogan"
          error-label="We need a valid email"
          :count="50"
        >
          <q-input v-model="brand.slogan" type="text" float-label="Slogan" placeholder="Slogan" />
        </q-field>

        <q-field
          icon=""
          label="Short Description"
          helper="Helper"
          error-label="We need a valid email"
          :count="10"
        >
          <q-editor v-model="brand.shortDescription" />
        </q-field>

        <q-field
          icon=""
          label="Description"
          helper="Helper"
          error-label="We need a valid email"
          :count="10"
        >
          <q-editor v-model="brand.description" />
        </q-field>
    </div>
</template>


<script>
export default {
    data(){
        return {
            brand:{
                shortDescription: '',
                description: '',
            }
        }
    }
}
</script>