<template>
    <div>
        <q-field
               icon=""
               label="Category Name"
               error-label="We need a valid email"
               :count="16"
             >
               <q-input v-model="category.name" type="text" float-label="Category Name" placeholder="Category Name" />
             </q-field>

            <q-field
              icon=""
              label="Slug"
              helper=""
              :count="25"
            >
              <q-input v-model="category.slug" type="text" float-label="Slug" placeholder="Slug" />
            </q-field>

             <q-field
               icon=""
               label="Parent Category"
             >
               <q-tree
               type="multiple"
                 :nodes="categoryTree"
                 node-key="id"
                 checkbox
               />
             </q-field>

    </div>
</template>


<script>
export default {
  props:{
    title:{
      type: String,
      default: "Create a New Category"
    }
  },
  model:{
    prop:'category',
    event: 'change'
  },
    data(){
      return{
        category: {},
      }
    },
    methods: {},
    computed: {
        categoryTree(){
            return [
              {
                id:2,
                label: "Electronics",
                children: [
                  {
                    id:4,
                    label: "Phones and Tablets",
                    children: [
                      {
                        id:78,
                        label:"Android Phones"
                      }
                    ]
                  },
                  {
                    id:90,
                    label:"Laptops and Computers"
                  }
                ]
              },
              {
                id:6,
                label:"Fashion",
                children:[
                  {
                    id:12,
                    label:"Women Wears",
                  }
                ]
              }
            ];
        }
    },

    watch: {
      category(){
        this.$emit('change',this.product)
      }
    },
    
}
</script>
