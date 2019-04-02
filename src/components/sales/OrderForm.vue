<template>
    <div>


      <!--
ADD NEW ITEM FORM---
  -->
      <nifrat-window ref="newItemWindow" title="New Order Item">
            <q-card>

          <q-card-title>
            Add a New Item
          </q-card-title>
          <q-card-separator />
          <q-card-main>
             <q-input v-model="productSearch" type="text" placeholder="Search Product" icon="search"/>
              <q-list>
                <!--q-list-header-->




              </q-list>

             <q-field
               icon=""
               label="Product"
               helper="The Product sold"
               error-label="We need a valid Product"
             >
               <q-select v-model="newItem.product"  float-label="" placeholder="Product" :options="productOptions" radio/>
             </q-field>

             <q-field
              icon=""
              label="Product Repair Condition"
              v-if="newItem.product"
              >
                <q-select v-model="newItem.productCondition" float-label="Condition" :options="productConditionOptions" radio></q-select>

              </q-field>

             <q-field
               icon="money"
               label="Unit Price"
               helper="Unit Price Of Customer(as of the Order Time)"
               error-label="Enter a valid Money Value"
             >
               <q-input v-model="newItem.unitPrice" type="number" float-label="Unit Price" placeholder="Unit Price" :value="2500"/>
             </q-field>

              <q-field
               icon="stage"
               label="Quantity"
               helper="Quantity Bought"
               error-label="Enter a valid number"
             >
               <q-input v-model="newItem.quantity" type="number" float-label="Quantity" placeholder="Quantity Bought" />
             </q-field>

            <q-collapsible group="somegroup" icon="-" label="Add Discount">

               <!--div v-if="newItemHasDiscount">

               <q-field
                 icon="-"
                 label="Unit Discount"
                 helper="Unit Discount"
                 error-label="We need a valid Money Value"
                 :count="10"
               >
                 <q-input v-model="newItem.unitDiscount" type="number" float-label="Unit Discount" placeholder="Unit Discount" />
               </q-field>
             </div-->
            </q-collapsible>

          </q-card-main>
          <q-card-separator />
          <q-card-actions align="center">
            <q-btn color="blue" label="Save" icon="save" v-on:click="saveOrderItem; $refs.newItemWindow.close()"/>
            <q-btn color="red" label="Cancel" v-on:click="newItem = {}; $refs.newItemWindow.close()" />
          </q-card-actions>
           </q-card>
         </nifrat-window>
<!--
 ----ADD NEW ITEM FORM
  -->


          

  <!--MODAL
    -------NEW Customer FORM
    -->
          <nifrat-window ref="newCustomerWindow" title="Customer Form">
            <q-card>
              <q-card-title>
                Create a New Customer
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                <customer-form v-model="newCustomer" ref="customerForm"></customer-form>
              </q-card-main>
              <q-card-separator />
              <q-card-actions  align="center">

                <q-btn color="primary" label="Save"
                 icon="save" v-on:click="$refs.customerForm.validate();setCustomer(newCustomer);$refs.newCustomerWindow.close()"/>
                <q-btn color="red" label="Cancel"  v-on:click="newCustomer = {}; $refs.newCustomerWindow.close()"/>

              </q-card-actions>
            </q-card>
          </nifrat-window>
<!--MODEL--
NEW CUSTOMER FORM-----
-->






       <!--q-collapsible group="somegroup" icon="person" label="Customer"-->
         <div> 
         Select Customer:<br/><br/>
           <q-btn-group rounded>
            <q-btn v-on:click="$refs.newCustomerWindow.open()" icon="add" style="float:right" flat>New Customer</q-btn>
            <q-btn icon="web" flat>Customer Browser</q-btn>
           </q-btn-group>

           <div><br/>
             Customer: <span style="width: 200%;" v-if="order.customer"><b>{{order.customer.name}}</b><q-btn v-on:click="setCustomer(null)" icon="clear" flat></q-btn></span>
                <span style="color: red" v-else> Please Choose or Create a Customer</span>
           </div>

         <q-search :icon="$q.platform.is.desktop? 'person': 'swipe'" float-label="Search for a Customer" placeholder="Search" value="" color="indigo-10" v-model="customerSearchString" autocomplete clearable autofocus>
           
            <q-popover>
           <q-list v-if="readyCustomers.length > 0" highlight>
             <q-list-header >Select Customer For this Order</q-list-header>
             <div v-for="customer in readyCustomers" :key="customer.id" event="click" @click="setCustomer(customer)">
             <q-item>
               <q-item-side :avatar="customer.profileImage" />
               <q-item-main @click="order.customer = customer">{{customer.name}}</q-item-main>
               <q-item-side right></q-item-side>
             </q-item>
             </div>
           </q-list>
         </q-popover>

         </q-search><br/>
         
         </div>
       <!--/q-collapsible-->
       
       <q-btn color="primary" icon="add" v-on:click="$refs.newItemWindow.open()" flat>Add an Item</q-btn><br/><br><br>



       <q-table
         title="Product Items"
         :data="order.items"
         :columns="[{
                    name: 'Product Thumnail',
                    required: true,
                    label: 'Product Thumnail',
                    align: 'left',
                    field: row => row.product.image.src,
                    format: data => data,
               //     sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
        

                 {
                    name: 'Product Name',
                    required: true,
                    label: 'Product Name',
                    align: 'left',
                    field: productItem => productItem.product.name,
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },

                {
                    name: 'Product Condition',
                    required: true,
                    label: 'Product Condition',
                    align: 'left',
                    field: productItem => productItem.condition.label,
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
                {
                    name: 'Unit Price',
                    required: true,
                    label: 'Unit Price',
                    align: 'left',
                    field: productItem => productItem.unitPrice,
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
                 {
                    name: 'QTY',
                    required: true,
                    label: 'Quantity',
                    align: 'left',
                    field: 'quantity',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
                 {
                    name: 'Unit Discount',
                    required: true,
                    label: 'Unit Discount',
                    align: 'left',
                    field: 'unitDiscount',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
                {
                    name: 'Line Discount',
                    required: true,
                    label: 'Line Discount',
                    align: 'left',
                    field: 'discount',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },
                {
                    name: 'Line Total',
                    required: true,
                    label: 'Line Total',
                    align: 'left',
                    field: 'lineTotal',
                    sortable: true,
                    classes: 'green',
                    style: 'width:;'
                },

                 {
                    name: 'Actions',
                   // required: true,
                    label: 'Actions',
                    align: 'left',
                   // field: productItem => productItem.condition.label,
                   // sortable: true,
                   // classes: 'green',
                    style: 'width:;'
                },
]"
         row-key="id"
         hide-bottom
       />
<q-item>
  <q-item-side>Total</q-item-side>
  <q-item-main></q-item-main>
  <q-item-side right>{{order.total.currency.symbol}} {{order.total.value}}</q-item-side>
</q-item>
       <br>


    <q-field
      icon="place"
      label="Address for the Invoice"
      helper=""
      error-label="Invalid Address"
      :count="50"
    >
      <q-input v-model="order.billingAdress" type="tel" float-label="Billing Address" placeholder="Billing Address" prefix="$(USD)" />
    </q-field><br/>
    <q-field
      icon="place"
      label="Address For the shipment"
      helper=""
      error-label="Invalid Address"
      :count="50"
    >
      <q-input v-model="order.shippingAdress" type="textarea" float-label="Shipping Address" placeholder="Shipping Address" />
    </q-field><br/>

    <q-field
      icon="shop"
      label="Order Store"
      helper="The Store Where this Order was Made(Leave blank if none)"
      error-label=""
    >
    <q-select
      v-model="order.store"
      float-label="Order Store"
      radio
      :options="stores"
    />
    </q-field><br/>

    <q-field
      icon="event"
      label="Order Date"
      helper="When this Order was Made"
      error-label="We need a valid Date"
    >
      <q-datetime v-model="order.date" type="date"  color="indigo-10" okLabel="Ok" cancelLabel="Cancel" modal popover clearable/>
      
    </q-field><br/>

     <q-field
      icon="watch"
      label="Order Time"
      helper="When this Order was Made"
      error-label="We need a valid Time"
    >
      <q-datetime v-model="order.time" type="time"  color="indigo-10" okLabel="Ok" cancelLabel="Cancel" modal popover clearable/>
      
    </q-field><br/>

    </div>
</template>



<script>
import CustomerForm from 'components/crm/CustomerForm.vue';

export default {
  components:{  CustomerForm },
    model:{
        prop:'order',
        event: 'change',
    },
    data(){
        return {
            order:{
              items: [],
              total:{
                value:50200.40,
                currency: {
                  code:"USD",
                  symbol: "$"
                }
              }
            },
            products: [
            {
              id: 23,
              name: "Totek LED Panel Light",
              unitPrice: {
                value: 500,
                currency: "USD"
              },
              productItems: [
                {
                  condition: {
                    id: 'brand_new',
                    label: "Brand New"
                  }
                }
              ]
            },
             {
              id: 855,
              name: "ORL Gaint Ceiling Fan",
              unitPrice: {
                value: 7500,
                currency: "NGN"
              },
              productItems: [
                {
                  condition: {
                    id: 'brand_new',
                    label: "Brand New"
                  }
                },
                {
                  condition: {
                    id:"used",
                    label: "Used"
                  }
                },
                {
                  condition: {
                    id: 'fairly_used',
                    label: 'Fairly Used'
                  }
                }
              ]
            }
            ],
            customerSearchString: "",
            productSearch: '',
            stores:[],
            productConditions: [
            {
              value: "brand_new", label: "Brand New"
            },
            {
              value: 'used', label: "Used"
            }],
            productItems: [
            {
              product: {
                image: {
                  url: '',
                }
              }
            }],
            newCustomer: {},
            newItem: {},
            customers:[
                {
                    id: 2,
                    name:"Callistus Nkamuo",
                    profileImage: 'http://localhost:8000/user.jpg',
                    phone:"07032423812"
                },
                 {
                    id: 3,
                    name:"Sohpier Grace",
                    profileImage: 'http://localhost:8000/user.jpg',
                    phone:"08108661897"
                },
                 {
                    id: 4,
                    name:"David Nkamuo",
                    profileImage: 'http://localhost:8000/user.jpg',
                    phone:"94703248642"
                },
            ],
             readyCustomers: [],
             // CONFIGURATIVE DATA
             addItemForm: {
              open: false,
              minimized: false,
              maximized: false,
             },
             isCreateNewCustomerFormOpen: false,
             newItemHasDiscount: false,
        }
    },

    methods: {
        setCustomer(customer){
            console.log("Customer: "+JSON.stringify( customer));

            this.order.customer = customer;
            this.readyCustomers = [];
            this.customerSearchString = '';
        },


        saveOrderItem(){
          this.order.items.push(this.newItem);
        }

      //  alert: console.log,
    },

    watch: {
        customerSearchString(input){
            console.log("Search String: "+input)
         this.readyCustomers = [];

            if(input.length < 2){
                return;
            }

            this.customers.forEach(customer => {
                
                var lowerInput = input.toLowerCase();
                var lowerCustomerName = customer.name.toLowerCase();
    
                if(lowerCustomerName.indexOf(lowerInput) != -1){
                    
                    this.readyCustomers.push(customer);
                }

            });
        }
    },

    computed: {
      productOptions(){
        var options = [];

        this.products.forEach((product)=>{
          options.push({
            value: product.id,
            label: product.name +"("+product.unitPrice.currency+" "+ product.unitPrice.value+")",

          });
        });

        console.debug(options)
        return options;
      },

      productConditionOptions(){

       var options = [];
       var product;

        console.log(this.newItem.product)
        if(!this.newItem.product)
          return options;

        this.products.forEach( (element) =>{
          if(element.id == this.newItem.product){
            product = element;
          }
        });

        if(!product)
          throw new Error("Unable to get Product conditions");

         product.productItems.forEach( (productItem)=>{
          options.push({
            value: productItem.condition.id,
            label: productItem.condition.label,
          });
        });

        console.debug(options)

        return options;
      }
    }
}
</script>