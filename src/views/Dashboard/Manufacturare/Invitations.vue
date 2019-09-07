<template>
    <div>
      <app-header></app-header>
      <app-drawer></app-drawer>
      <v-container>
        <h1>Invitaions</h1>
        <v-layout row wrap justify-space-between>
            <v-flex xs12 sm8>
            <v-combobox
            v-model="select"
            :items="items"
            label="Select any person"
            ></v-combobox>
        </v-flex>
        <v-flex xs12 sm3>
            <v-btn block color="success" dark>Send Request</v-btn>
        </v-flex>
        </v-layout>
        <!-- Table code -->
        <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template v-slot:items="props">
                <td>{{ props.item.sr }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">
                    <v-chip :color="props.item.color" class="white--text">{{props.item.status}}</v-chip>
                </td>
                </template>
            </v-data-table>
        </template>
        </v-container>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        select: '',
        items: [
          'Person 1',
          'Person 2',
          'Person 3',
          'Person 4'
        ],
        headers: [
          {
            text: 'Sr No#',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Names', value: 'calories' },
          { text: 'Status', value: 'fat' }
        ],
        desserts: [
          {
            sr: '1',
            name: 'Jhon',
            status: 'Pending',
            color:'light-blue darken-1'
          },
          {
            sr: '2',
            name: 'Adam',
            status: 'Accepted',
            color:'green darken-2'
          }
        ]
      }
    }
  }
</script>