<template>
    <div>
        <q-field
          icon="cloud"
          label="Your Gmail"
          helper="Helper"
          :error="mailHasError"
          error-label="We need a valid email"
          :count="10"
        >
          
        </q-field>
    </div>
</template>





<script>
export default {
    
}
</script>