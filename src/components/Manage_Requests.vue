<template>
    <div>
      <v-container>        
        <!-- Table code -->
        <!-- <template> -->
  <v-card>
    <v-card-title class="subheading">
      Manage Request
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.sr }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.type }}</td>
                <td class="text-xs-left">
                    <v-chip :color="props.item.color" class="white--text">{{props.item.status}}</v-chip>
                </td>
                <td class="text-xs-left">
                    <v-icon color="red" medium>delete</v-icon>
                  <span v-if="props.item.status=='Pending'">
                      <v-icon color="green" medium>done</v-icon> 
                  </span>
                </td>
              </template>
            <template v-slot:no-results>
          <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</v-container>
</div>
</template>
<script>
import AdminNav from '@/components/AdminNav.vue'
  export default {
    components:{
        'admin-nav':AdminNav
    },
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
          { text: 'Names', value: 'calories', sortable: false},
          { text: 'Type', value: 'calories', sortable: false },
          { text: 'Status', value: 'fat', sortable: false },
          { text: 'Actions', value: 'fat', sortable: false }
        ],
        desserts: [
          {
            sr: '1',
            name: 'Jhon',
            status: 'Pending',
            color:'light-blue darken-1',
            type:'Merchant'
          },
          {
            sr: '2',
            name: 'Adam',
            status: 'Accepted',
            color:'green darken-2',
            type:'Manufacturer'
          }
        ]
      }
    },
      methods:{
        Accept(){
          this.status='Accepted';
          
        }  
      }
  }
</script>
<style>
  .v-sheet--offset {
    top: -14px;
    /* position: relative; */
  }
</style>