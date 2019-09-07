<template>
    <div>
      <app-header></app-header>
      <app-nav></app-nav>
    <v-container>
      <h1>Your Order</h1><br>
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
        <td class="text-xs-left">{{ props.item.qty }}</td>
        <td class="text-xs-left"><v-icon color="red">delete</v-icon></td>
        <td class="text-xs-left">---</td>
        </template>
      </v-data-table><br>
      <div class="title outline">
        <span class="right mr-5 pr-4">xxxx</span><span class="right mr-5">Grand Total</span>
      </div>
      <br>
      <h2>Master Card Detail</h2>
      <v-text-field v-model="card_no" :rules="cardNoRules" label="Card No" required></v-text-field>
      <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
      >
      <template v-slot:activator="{ on }">
        <v-text-field
            v-model="date"
            label="Card Expiry"
            readonly
            v-on="on"
        ></v-text-field>
      </template>
        <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="error" @click="menu = false">Cancel</v-btn>
        <v-btn flat color="success" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <router-link to="/">
          <v-btn  class="right" color="error">Cancel</v-btn>
      </router-link>
      <router-link to="/thanks">
          <v-btn :disabled="!valid" color="success" @click="validate" class="right">Pay</v-btn>
      </router-link>
      </v-form>
    </v-container>
    </div>
</template>
<script>
  export default {
      data () {
      return {
        date: new Date().toISOString().substr(0, 10),
        valid: true,
        menu:'',
        card_no: '',
        cardNoRules:[
            v => !!v || 'Name is required'
        ],
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
          { text: 'Action',sortable: false, value: '' },
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