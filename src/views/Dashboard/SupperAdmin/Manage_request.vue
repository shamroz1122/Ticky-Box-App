<template>
    <div>
      <admin-nav></admin-nav>
      <v-container>
        <h1>Manage Requests </h1>
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
                <td class="text-xs-left">{{ props.item.type }}</td>
                <td class="text-xs-left">
                    <v-chip :color="props.item.color" class="white--text">{{props.item.status}}</v-chip>
                </td>
                <td class="text-xs-left">
                    <v-btn color="error" small round>Delete</v-btn>
                  <span v-if="props.item.status=='Pending'">
                    <v-btn color="success" small round v-on:click="Accept">Accept</v-btn>
                  </span>
                </td>
                </template>
            </v-data-table>
        </template>
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