<template>
    <q-layout-drawer
      v-model="nowOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      color="base"
      ref="drawer"
      contentClass="navbar"
      swipeable
    >


        <!--img src=require('assets/sad.svg') alt=""-->

  <q-item to="/dashboard">
             <q-item-side icon="dashboard" />
             <q-item-main>
                <q-item-tile label>Dashboard</q-item-tile>
                <!--q-item-tile sublabel>Assign Customers to Different Groups</q-item-tile-->
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>


     <q-collapsible group="somegroup" icon="class" label="Catalog">
  
      <q-list
        no-border
        link
        inset-delimiter
        color="primary"
      >
<!--q-list-header>Catalog</q-list-header-->
  

        <q-item to="/catalog/product">
          <q-item-side icon="edit" />
          <q-item-main label="Products" sublabel="Create, View, Update and Delete Products" />
        </q-item>

      </q-list>


     <q-item to="/catalog/product-item">
          <q-item-side icon="edit" />
          <q-item-main label="Product Items" sublabel="Manage the Condition of Products" />
        </q-item>

         <q-item to="/catalog/brand">
          <q-item-side icon="flag" />
          <q-item-main label="Brands" sublabel="Create, View, Update and Delete Brands" />
        </q-item>

      </q-list>

      </q-list>
       
        <q-item to="/catalog/category">
          <q-item-side icon="category" align="left"/>
          <q-item-main label="Categories" sublabel="Manage Product Categorizations"/>
        </q-item>

      </q-list>

      <q-list highlight
        no-border
        link
        inset-delimiter
        color="primary">
        <q-list-header>Catalog Configurations</q-list-header>

        <q-item to="/catalog/product-condition">
          <q-item-side icon="book" />
          <q-item-main>Product Conditions</q-item-main>
          <q-item-side right></q-item-side>
        </q-item>

        <q-item to="/catalog/product-rating">
          <q-item-side icon="star" />
          <q-item-main>Product Ratings</q-item-main>
          <q-item-side right></q-item-side>
        </q-item>

      </q-list>
     </q-collapsible>


     <q-collapsible group="somegroup" icon="shopping_cart" label="Sales">
   
       <q-list 
        no-border
        link
        inset-delimiter
        color="primary">

<!--q-list-header>Sales</q-list-header-->

         <q-item to="/sales/order">
           <q-item-side icon="store"/>
           <q-item-main label="Orders" sublabel="Manage Sales Orders"/>
         </q-item>

        <q-item tag="label" to="/sales/invoice">
          <q-item-side icon="payment">
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Invoices</q-item-tile>
            <q-item-tile sublabel>Issue and Manage Invoices</q-item-tile>
          </q-item-main>
          <q-item-side right>
          </q-item-side>
        </q-item>

         <q-item tag="label" to="/sales/payment">
          <q-item-side icon="money">
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Payments</q-item-tile>
            <q-item-tile sublabel>Accept, Refund or Modify Payments</q-item-tile>
          </q-item-main>
          <q-item-side right>
          </q-item-side>
        </q-item>

         <q-item tag="label" to="/sales/shipment">
          <q-item-side icon="place">
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Shipments</q-item-tile>
            <q-item-tile sublabel>Manage Shipments</q-item-tile>
          </q-item-main>
          <q-item-side right>
          </q-item-side>
        </q-item>

       </q-list>



    <q-list highlight
        no-border
        link
        inset-delimiter>
      <q-list-header>Sales Configurations</q-list-header>

      <q-item to="/sales/order-status">
        <q-item-side icon="settings" />
        <q-item-main>
            <q-item-tile label>Order Status</q-item-tile>
            <q-item-tile sublabel>Different Status for Orders</q-item-tile>
          </q-item-main>
      </q-item>

      
      <q-item to="/sales/order-activity">
        <q-item-side icon="settings" />
        <q-item-main>
            <q-item-tile label>Order Activities</q-item-tile>
            <q-item-tile sublabel>Activities towards an Order</q-item-tile>
          </q-item-main>
      </q-item>

    </q-list>

     </q-collapsible>

     <q-collapsible group="somegroup" icon="speaker" label="Marketing">
      
      <q-list
        no-border
        link
        inset-delimiter
        color="primary">
       
        <q-item to="/marketing/promotion">
          <q-item-side icon="cloud" />
          <q-item-main>
            <q-item-tile label>Promotions</q-item-tile>
            <q-item-tile sublabel>Start a Promo, Create Coupons and Vouchers</q-item-tile>
          </q-item-main>
        </q-item>

         <q-item to="/marketing/social-share">
          <q-item-side icon="share" />
          <q-item-main>
            <q-item-tile label>Social Share</q-item-tile>
            <q-item-tile sublabel>Share Products, Categories and Contents on Social Platforms</q-item-tile>
          </q-item-main>
        </q-item>

      </q-list>


     </q-collapsible>




<q-collapsible group="somegroup" icon="people" label="Customers">
  <div>
    
    <q-list highlight no-border>
      <!--q-list-header>Recent chats</q-list-header-->

          <q-item to="/customer">
             <q-item-side icon="person" />
             <q-item-main>
                <q-item-tile label>Customers</q-item-tile>
                <q-item-tile sublabel>All Customers</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>
       
           <q-item to="/customer/group">
             <q-item-side icon="group" />
             <q-item-main>
                <q-item-tile label>Customer Groups</q-item-tile>
                <q-item-tile sublabel>Assign Customers to Different Groups</q-item-tile>
             </q-item-main>
             
           </q-item>

           <q-item to="/customer/online">
             <q-item-side icon="wifi" />
             <q-item-main>
                <q-item-tile label>Currently Online</q-item-tile>
                <q-item-tile sublabel>Customers That are Currently Online</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>
    </q-list>

  </div>
</q-collapsible>


 <q-collapsible group="somegroup" icon="inventory" label="Inventory">
      
      <q-list
        no-border
        link
        inset-delimiter
        color="primary">

        <q-item to="/inventory/stock">
          <q-item-side icon="inventory" />
          <q-item-main label="Stock" sublabel="Take Stock for Your Products" />
        </q-item>


        <q-item to="/inventory/purchase">
          <q-item-side icon="shopping_cart" />
          <q-item-main label="Purchases" sublabel="Purchases for Items You sell in your Store(s)" />
        </q-item>


      </q-list>
      


     </q-collapsible>




     <q-collapsible group="somegroup" icon="edit" label="Content">
       <div>

         <q-list highlight
         no-border
        link
        inset-delimiter
        color="primary">

           <q-list-header>Posts</q-list-header>

           <q-item to="/cms/post">
             <q-item-side icon="edit"/>
             <q-item-main label="Posts">
                <q-item-tile sublabel>Manage Posts</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>

          <q-item to="/cms/post/comment">
            <q-item-side icon="comment">
            </q-item-side>
            <q-item-main>
              <q-item-tile label>Comment</q-item-tile>
              <q-item-tile sublabel>Manage User Comments</q-item-tile>
            </q-item-main>
          </q-item>
         </q-list>
       </div>
     </q-collapsible>



<q-collapsible group="somegroup" icon="update" label="Reports">
       <div>
         
         <q-list highlight
          no-border
        link
        inset-delimiter>
           <q-list-header>Website</q-list-header>
           <q-item to="/reports/google-analytics">
             <q-item-side icon="" />
             <q-item-main>
                <q-item-tile label>Google  Analytics</q-item-tile>
                <q-item-tile sublabel>View Your Store Metrics On Google Analytics</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>
         </q-list>


<q-list highlight
          no-border
        link
        inset-delimiter>
           <q-list-header>Sales</q-list-header>

           <q-item to="/reports/sales/order">
             <q-item-side icon="shopping_cart" />
             <q-item-main>
                <q-item-tile label>Orders</q-item-tile>
                <q-item-tile sublabel>View Report for Orders Analytics</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>

            
           <q-item to="/reports/sales/discounts">
             <q-item-side icon="-" />
             <q-item-main>
                <q-item-tile label>Discounts</q-item-tile>
                <q-item-tile sublabel>Discounts You Give</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>


            
           <q-item to="/reports/sales/shipment">
             <q-item-side icon="place" />
             <q-item-main>
                <q-item-tile label>Shipment</q-item-tile>
                <q-item-tile sublabel></q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>

         </q-list>



       </div>
     </q-collapsible>




     <q-collapsible group="somegroup" icon="computer" label="System">
       <div>
         
         <q-list highlight
          no-border
        link
        inset-delimiter>
           <!--q-list-header></q-list-header-->
           <q-item to="/system/backup">
             <q-item-side icon="backup" />
             <q-item-main>
                <q-item-tile label>Backup and Restore</q-item-tile>
                <q-item-tile sublabel>Backup your data or Restore Backups</q-item-tile>
             </q-item-main>
             <q-item-side right icon="" />
           </q-item>
         </q-list>

       </div>
     </q-collapsible>

    </q-layout-drawer>

</template>





<style>
  
</style>

<script>
import {Platform} from 'quasar';

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: Platform.is.desktop? true: false,
    }
  },

  model:{
    prop: 'isOpen',
    event: 'change'
  },

    data(){
        return {
                nowOpen: Platform.is.desktop? true : false,
        }
    },

    mounted(){
      this.$el.addEventListener('click',(event)=>{
event.isOnNavbar = true;
      });

      window.addEventListener('click',(event)=>{

if(event.isOnNavbar || this.$q.platform.is.desktop){
  return
}
        this.nowOpen = false;
      })
    },

    watch: {
      isOpen(isOpen){
        this.nowOpen =  isOpen;
      },

      nowOpen(nowOpen){
          this.$emit('change',this.nowOpen)
      }
    }
}
</script>