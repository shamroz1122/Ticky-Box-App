<template>
  <div>
    <app-header></app-header>
    <app-drawer></app-drawer>
    <v-container>
      <v-layout row wrap>
        <v-container>
          <v-flex xs12>
            <template>
              <div>
                <v-toolbar flat color="white">
                  <v-toolbar-title>Store List</v-toolbar-title>
                  <v-divider
                    class="mx-2"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="success" dark class="mb-2" v-on="on">Add Store</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.name" label="Store name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.image" type="file"></v-text-field>
                            </v-flex>
                            
                          </v-layout>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" flat @click="close">Cancel</v-btn>
                        <v-btn color="success" flat @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  class="elevation-1"
                >
                  <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.description }}</td>
                    <td class="text-xs-left">{{ props.item.address }}</td>
                    <td class="text-xs-left">{{ props.item.phone }}</td>
                    <td class="text-xs-left">Manufacturer/Merchant</td>
                    <td class="text-xs-left"><img src="../../../assets/logos.png" alt="" class="my-3" width="40px"></td>
                    <td class="justify-center layout px-0">
                      <router-link to="/store_details" style="text-decoration:none">
                        <v-icon @click="xyz" color="success" small class="mr-2 mt-3">visibility</v-icon>
                      </router-link>
                      <v-icon
                        color="primary"
                        small
                        class="mr-2"
                        @click="editItem(props.item)">
                        edit
                      </v-icon>
                      <v-icon
                        color="error"
                        small
                       @click.stop="dialog1 = true">
                        delete
                      </v-icon>
                      <router-link to="#" style="text-decoration:none">
                        <v-btn color="success" round small class="mr-2 mt-2">Publish</v-btn>
                      </router-link>
                    </td>
                  </template>
                  <template v-slot:no-data>
                    <span>No data is avalaible</span>
                  </template>
                </v-data-table>
              </div>
            </template>
          </v-flex>
          </v-container>
      </v-layout>
            <v-dialog
              v-model="dialog1"
              max-width="290">
              <v-card>
                <v-card-title class="headline">Alert</v-card-title>

                <v-card-text>
                 Are you sure you want to delete this Product?
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="green darken-1"
                    flat="flat"
                    @click="dialog1 = false"
                  >
                   Cancel
                  </v-btn>

                  <v-btn
                    color="green darken-1"
                    flat="flat"
                   @click="deleteItem()"
                  >
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialog1: false,
      headers: [
        {
          text: 'Store Title',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Description', value: 'description',sortable: false,align: 'left' },
        { text: 'Address', value: 'description',sortable: false,align: 'left' },
        { text: 'Phone', value: 'description',sortable: false,align: 'left' },
        { text: 'Merchant/anufacturer', value: 'product_type',sortable: false,align: 'left' },
        { text: 'Image', value: 'image',sortable: false,align: 'left' },
        { text: 'Actions', value: 'name', sortable: false,align: 'left' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        description: '',
        address: '',
        phone: '',
        is_manufacturer:''
       
      },
      defaultItem: {
        name: '',
        description: '',
        address: '',
        phone: '',
        is_manufacturer:''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Store' : 'Edit Store'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            description: 159,
            address: 6.0,
            phone: 24,
            is_manufacturer:''
          },
          
          {
            name: 'Lollipop',
            description: 392,
            address: 0.2,
            phone: 98,
            is_manufacturer:''
          },
          {
            name: 'Honeycomb',
            description: 408,
            address: 3.2,
            phone: 87,
            is_manufacturer:''
          },
          {
            name: 'Donut',
            description: 452,
            address: 25.0,
            phone: 51,
            is_manufacturer:''
          },
          {
            name: 'KitKat',
            description: 518,
            address: 26.0,
            phone: 65,
            is_manufacturer:''
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        this.desserts.splice(index, 1)
        this.dialog1 = false
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>