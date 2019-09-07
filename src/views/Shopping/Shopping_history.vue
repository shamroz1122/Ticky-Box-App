<template>
    <div>
      <app-header></app-header>
      <app-nav></app-nav>
      <v-container>
        <h1>Shopping History</h1>
        <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
        >
            <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.sr }}</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td class="text-xs-left">
                <router-link to="/shopping_history_details" style="text-decoration:none">
                    Details
                </router-link>
            </td>
            
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
            text: 'Sr no',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Date', value: 'calories' },
          { text: 'Shopping Details', value: 'fat' }
        ],
        desserts: [
          {
            sr:'1',
            date: '04/05/2019'
          },
          {
            sr:'2',
            date: '04/05/2019'
          }
        ]
      }
    }
  }
</script>