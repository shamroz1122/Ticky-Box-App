<template>
    <div>
      <app-header></app-header>
      <app-nav></app-nav>
      <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <h1>Shopping History Detail</h1><br>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-right">
                <h4>Date: 05/04/2019</h4>
            </v-flex>
        </v-layout>
        <v-form>
          <v-data-table
              :headers="headers"
              :items="desserts"
              hide-actions
          >
              <template v-slot:items="props">
              <td>{{ props.item.image }}</td>
              <td class="text-xs-left">{{ props.item.description }}</td>
              <td class="text-xs-left">{{ props.item.price }}</td>
              <td class="text-xs-left">5</td>
              <td class="text-xs-left">---</td>
              </template>
          </v-data-table><br>
          <div class="title outline">
            <span>Grand Total</span> <span class="right mr-5 pr-4">xxxx</span>
          </div>
          <br>
          <v-layout row wrap>
            <v-flex sm12>
              <v-layout row wrap justify-start>
                <!-- <v-flex xs8 offset-xs2 sm4 offset-sm0>
                  <router-link to="/" style="text-decoration:none;">
                    <v-btn class="" block color="success"><v-icon>keyboard_arrow_left</v-icon> Continues to shopping</v-btn>
                  </router-link>
                </v-flex> -->
                <v-flex xs12>
                  <router-link to="/shopping_history" style="text-decoration:none;">
                    <v-btn class="right" color="success"><v-icon>keyboard_arrow_left</v-icon> Back</v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-form>
      </v-container>
    </div>
</template>
<script>
  export default {
      data () {
      return {
        headers: [
            {
            text: 'Product',
            sortable: false,
            align: 'left',
            value: 'name'
          },
          { text: 'Description',sortable: false, value: 'description' },
          { text: 'Unit Price $',sortable: false, value: 'price' },
          { text: 'Qty',sortable: false, value: 'qty' },
          { text: 'Total',sortable: false, value: '' }
        ],
        desserts: [
          {
            image: 'Frozen Yogurt',
            description: 159,
            price: 6.0,
            qty: 24
          },
          {
            image: 'KitKat',
            description: 518,
            price: 26.0,
            qty: 65
          }
        ]
      }
    }
  }
</script>