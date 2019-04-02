<template>
    <div>
        <q-card>
          <q-card-title>
            Your Shopping Cart
          </q-card-title>
          <q-card-separator />
          <q-card-main>
              <q-list highlight>
                <!--q-list-header>Recent chats</q-list-header-->
                <q-item tag="label">
                  <q-item-side>
                 <q-item-tile label><b>Thumbnail Image</b></q-item-tile>
                  </q-item-side>
                  <q-item-main>
                   <q-item-tile label>Description</q-item-tile>
                    <q-item-tile sublabel>Quantity</q-item-tile>
                  </q-item-main>
                  <q-item-side right>
                  <b> Unit Price</b>
                  <q-item-tile>Subtotal</q-item-tile>
                  </q-item-side>
                </q-item>
                <br>

                <q-item v-for="product in  products" :key="product.id">
                  <q-item-side :image="product.img"></q-item-side>

                  <q-item-main >
                  <q-item-tile label>{{product.name}}</q-item-tile>
                 <q-item-tile sublabel>{{product.quantity}}</q-item-tile>
    </q-item-main>
                  <q-item-side right icon=""><span class="left"><b>${{product.price}}</b></span>  <q-item-tile>${{product.price * product.quantity}}</q-item-tile> </q-item-side>
                </q-item>
              </q-list>
          </q-card-main>
        </q-card>




<q-item tag="label">
  <q-item-side>
    <q-checkbox  />
  </q-item-side>
  <q-item-main>
    <q-item-tile label>Notifications</q-item-tile>
    <q-item-tile sublabel>Notify me about updates</q-item-tile>
  </q-item-main>
  <q-item-side right>
    <q-item-tile icon="chat_bubble" color="green" />
  </q-item-side>
</q-item>

    </div>




</template>

<script>

export default {
    name: '',
    data(){
        return {
            numberOfItemTypes: 40,
            products:[
                {
                    id:76,
                    name:"Totek LED Panel Light 6Watts",
                    img: 'http://localhost:8000/test.jpg',
                    price: 800,
                    quantity:57
                },
                 {
                    id:54,
                    name:"Samesumg Galaxy S8",
                    img: 'http://localhost:8000/phone.jpg',
                    price: 294300,
                    quantity:3
                }
            ]
        }
    }
}
</script>
