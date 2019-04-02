<template>
    <div>
        <stock-unit-form v-model="unit"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            unit: {},
        };
    }
}
</script>