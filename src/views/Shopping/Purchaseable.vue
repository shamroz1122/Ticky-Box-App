<template>
<div>
  <app-header></app-header>
  <app-nav></app-nav>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.image }}</td>
        <td class="text-xs-right">{{ props.item.description }}</td>
        <td class="text-xs-right">{{ props.item.price }}</td>
        <td class="text-xs-right">{{ props.item.qty }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
  </v-data-table>
  </v-container>
</div>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'image' },
          { text: 'description (g)', value: 'description' },
          { text: 'price (g)', value: 'price' },
          { text: 'Protein (g)', value: 'qty' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            image: 159,
            description: 6.0,
            price: 24,
            qty: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            image: 237,
            description: 9.0,
            price: 37,
            qty: 4.3,
            iron: '1%'
          },
          {
            name: 'KitKat',
            image: 518,
            description: 26.0,
            price: 65,
            qty: 7,
            iron: '6%'
          }
        ]
      }
    }
  }
</script>