<template>
  <center>
    <div>
      <q-field
        label="Enter Name For Product"
        helper
        :error-label="errors.first('name')"
        :error="errors.has('name')"
      >
        <q-input
          name="name"
          data-vv-as="Product Name"
          v-model="product.name"
          type="text"
          float-label="Product Name"
          placeholder="Product Name"
          v-validate="'required'"
        />
      </q-field>

      <q-field
        label="Stock Keeping Unit"
        helper=""
        :error="errors.has('sku')"
        :error-label="errors.first('sku')"
      >
        <q-input
          name="sku"
          data-vv-as="SKU"
          v-model="product.sku"
          type="text"
          float-label="Product SKU"
          placeholder="Stock Keeping Unit"
          v-validate="'required'"
        />
      </q-field>

      <q-field icon label="Base Unit Price"
      			helper
      			:error="errors.has('product-unit-price')"
      			:error-label="errors.first('product-unit-price')">
        <q-input
          v-model="product.baseUnitPrice"
          data-vv-as="Unit Price"
          name="product-unit-price"
          type="text"
          float-label="Base Unit Price"
          placeholder="Base Unit Price"
          v-validate="'required|number'"

        />
      </q-field>

    <q-field
      icon=""
      label="Select Categories"
      helper="Select Categories for this Product"
      :error="errors.has('categories')"
      :error-label="errors.first('categories')"
     
    >
     
     <q-collapsible group="" icon="" label="Categories">
       <div>
          <q-tree
          name="categories"
          data-vv-ass="Categories"
          v-validate="{required}"
          :nodes="categoryTree"
          color="indigo-10"
          default-expand-all
          :ticked.sync="product.categories"
          tick-strategy="strict"
          node-key="id"
      />
       </div>
     </q-collapsible>

    </q-field><br/><br/>
      <q-tabs color="base">
        <q-tab slot="title" name="cms-content" label="Contents" default></q-tab>
        <q-tab slot="title" name="media-info" label="Images and Videos"></q-tab>
        <q-tab slot="title" name="seo-info" label="SEO"></q-tab>


        <q-tab-pane name="seo-info">
        
        <q-field
            class
            label="Product URL Key"
            helper
            error-label="We need a valid URL Segment"
          >
            <q-input v-model="product.slug" type="text" float-label="Product URL" placeholder="URL" />
          </q-field>
          <q-field
            class
            label="Product Meta Key"
            helper
            error-label="We need a valid email"
          >
            <q-input v-model="product.metaKey" type="text" float-label="Meta Key" placeholder="Meta Key" />
          </q-field>

           <q-field
            class
            label="Product Meta Value"
            helper
            error-label="We need a valid email"
          >
            <q-input v-model="product.metaValue" type="textarea" float-label="Meta Value" placeholder="Meta value" />
          </q-field>
        </q-tab-pane>



    <!--Images And Videos-->
        <q-tab-pane name="media-info">
          <q-field
            icon="cloud"
            class
            label="Product Images"
            helper
            error-label="We need a valid email"
          >
            <br>
           <file-input :accept="['image/*']"/>
          </q-field>
          
          <q-select
            v-model="product.baseImage"
            float-label="Product Base Image"
            radio
          :options="product.images? product.images : []"
          />
        </q-tab-pane>
        
    <!--CMS Contents-->
        <q-tab-pane name="cms-content">
            <q-field
            class
            label="Enter a Short Description"
            helper
            error-label=""
            :count="255"
          >
            <q-editor v-model="product.shortDescription" float-label="Short Description" placeholder="Short Description" />
          </q-field>

              <q-field
            class
            label="Long Description"
            helper
            error-label=""
          >
          <q-editor  v-model="product.description"/>
          </q-field>

        </q-tab-pane>
      </q-tabs>

      
    </div>
  </center>
</template>


<style>
.text-base{
  color:#ffffff;
}

.bg-base{
  backgroud-color: #0b0231;
}
</style>



<script>
import { required } from "vuelidate/lib/validators";
import ProductRepository from '../../repositories/catalog/ProductRepository'
//import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
//import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials'
//import { resolve, reject } from 'q';
//import VueCkeditor from 'plugins/ckeditor';
//import {ClassicEditor} from 'plugins/ckeditor';




export default {

  model: {
    prop: "product",
    event: "change"
  },
  data() {
    return {
        productRepository: new ProductRepository,
        productCategories: [],
        product: {
          shortDescription:'',
          description:'',
          categories: [],
        }, 
       
     //   fields: [],
 // editor: ClassicEditor,
  editorConfig: {  plugins: [
  //                      EssentialsPlugin,
 //                       BoldPlugin,
  //                      ItalicPlugin,
  //                      LinkPlugin,
  //                      ParagraphPlugin
                    ],
                    }
    };
  },

  methods: {

    validate(){
     return this.$validator.validate();
    },



    validateField(error,field){

      switch (true) {
        case error.required:
          this.$errors.product[field] = "Product "+ field +" is required"
          break;
      
        default:
          break;
      }
    },



  async save() {
     // console.log(this.$v.product.$touch);
return new Promise( async (resolve,reject)=>{
     try{


     var product = await this.validate();

    this.productRepository.create(this.product)
            .then( data => {
                var product = JSON.parse(data);

                alert(data);
            })
            .catch(error => reject(error))
    //  this.$v.product.$touch();
     }
     catch(err){
       console.log(err)
     }

//END OF PROMISE
});

    },




     update(){
     // console.log(this.$v.product.$touch);
  return new Promise( (resolve,reject)=>{
     try{


     //var product = await this.validate();

    this.productRepository.update(product.id,product)
            .then( data => {
                var product = JSON.parse(data);

                resolve(data);
            })
            .catch(error => reject(error))
    //  this.$v.product.$touch();
     }
     catch(err){
       alert(err)
     }

//END OF PROMISE
});

    },


    getError(error){

    }

  },

  watch: {

    productCategoryIds(value){
        alert(value)
    },

    product() {
      this.$emit("change", this.product);
    }
  },
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
  validations: {
    product: {
      name: { required },
      sku: { required }
    }
  }
};
</script>
