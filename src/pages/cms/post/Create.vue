<template>
    <q-page :style-fn="myTweak">
        <post-form v-model="post"/>
    </q-page>
</template>

<script>
import PostForm from '../../../components/cms/PostForm.vue'
export default {
   // name: '',
        components: {PostForm},
        data(){
            return {
                post: {},
            };
        },

        methods: {

        }

}
</script>