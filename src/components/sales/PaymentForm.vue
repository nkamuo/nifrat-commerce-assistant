<template>
    <div>
        <!--q-field
          icon="payment"
          label="Bill Invoice"
          helper="The Invoice Bill Being Payed"
        >
          
        </q-field-->

        <q-collapsible group="somegroup" icon="payment" label="Invoice">
          <div>
              <q-list highlight>
                <q-list-header>Invoice To Payed</q-list-header>
                <q-item v-for="invoice in invoices" :key="invoice.id">
                  <q-item-side icon="invoice" :avater="invoice.receptor.image"></q-item-side>
                  <q-item-main >{{invoice.receptor.name}}</q-item-main>
                  <q-item-side right icon="">${{invoice.amount}}</q-item-side>
                </q-item>
              </q-list>
            
          </div>
        </q-collapsible>


       <q-field
         icon="money"
         label="Amount Paid"
         helper="Helper"
         :count="25"
       >
         <q-input v-model="payment.amount" type="number" float-label="Amount" placeholder="Money Amount">
             <span slot="append">Appended</span>
         </q-input>
       </q-field>


    </div>
</template>

<script>
export default {
    model: {
        prop: 'payment',
        event: 'change'
    },
    data(){
        return {
            invoices: [
                {
                    id:23,
                    amount: 59600,
                    receptor: {
                        id: 63,
                        name: 'Calistus Nkamuo',
                        image: 'http://localhost:8000/user.jpg'
                    }
                },
            ],
            payment:{}
        }
    }
}
</script>