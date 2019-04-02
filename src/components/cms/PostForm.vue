<template>
    <div>
        <q-field
          label="Title For Post"
          helper=""
          error-label=""
          :count="255"
        >
          <q-input v-model="post.title" type="text" float-label="Post Title" placeholder="Post Title" />
        </q-field>


        <q-field
          label=""
          helper="Helper"
          error-label=""
          :count="5000"
        >
         <q-editor :value="post.body"/>
         
        </q-field>
    </div>
</template>


<script>
export default {
    model: {
        prop: post,
        event: 'change',
    },
    /*props:{
        post: {
            type: Object,
            required: true,
        },
},*/
    data(){
        return {
            post: {
                title: '',
                body: '',
            },
        }
    },

    methods: {

    },

    watch: {
        post(){
            this.$emit('change');
        }
    }
}
</script>