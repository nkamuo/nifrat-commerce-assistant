<template>
    <div>
        

        <q-collapsible v-for="product in products" group="group-1" icon="" label="First" :image="stock.productItem.product.baseImage.src" :key="product.id">
            <span slot="subtitle">{{product.name}}</span>
          <div>
            
            <q-item v-for="stock in product.stocks" tag="label">
              <q-item-side >
              </q-item-side>
              <q-item-main>
                <q-item-tile label>stock.productItem.condition.label</q-item-tile>
                <!--q-item-tile sublabel>Notify me about updates</q-item-tile-->
              </q-item-main>
              <q-item-side right>
                    {{stock.quantity}}
                <!--q-item-tile icon="chat_bubble" color="green" /-->
              </q-item-side>
            </q-item>


          </div>
        </q-collapsible>

    </div>
</template>