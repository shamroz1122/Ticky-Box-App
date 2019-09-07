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
                  <v-toolbar-title>Coupon List</v-toolbar-title>
                  <v-divider
                    class="mx-2"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                 <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="success" dark class="mb-2" v-on="on">Add Coupon</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.name" label="Coupon name"></v-text-field>
                            </v-flex>
                          
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.sku" label="SKU"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px">
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="start_date"
                                    label="Add start date"
                                    readonly
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="start_date" no-title scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="end_date"
                                    label="Add end date"
                                    readonly
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="end_date" no-title scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                                  <v-btn flat color="primary" @click="$refs.menu1.save(date)">OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                            <v-select
                              v-model="editedItem.product_type"
                              :items="product_type"
                              label="Product Type"
                            ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-select
                              v-model="editedItem.product_category"
                              :items="product_category"
                              label="Select Product Category"
                            ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-select
                              v-model="editedItem.store"
                              :items="store"
                              label="Select Store"
                            ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.max_allowed_total_redemptions_per_store" label="Max Allow Total Redemptions Per Store"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.max_allowed_campaign_total_redemptions" label="Max Allow Campaign Total Redemptions"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.max_allowed_total_redemptions" label="Max Allow Total Redemptions"></v-text-field>
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
                    <td class="text-xs-left">{{ props.item.id }}</td>
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.start_date }}</td>
                    <td class="text-xs-left">{{ props.item.end_date }}</td>
                    <td class="text-xs-left">{{ props.item.max_consumption_per_consumer }}</td>
                    <td class="text-xs-left">{{ props.item.coupon_type }}</td>
                    <td class="text-xs-left">{{ props.item.coupon_category }}</td>
                    <td class="text-xs-left">{{ props.item.p_sku }}</td>
                    <td class="text-xs-left">{{ props.item.publish }}</td>
                    <td class="justify-center layout px-0">
                      <router-link to="/coupon_details" style="text-decoration:none;">
                        <v-icon @click="xyz" color="success" small class="mr-2 mt-3">visibility</v-icon>
                      </router-link>
                      <v-icon
                        color="primary"
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                      >
                        edit
                      </v-icon>
                      <v-icon
                        color="error"
                        small
                        @click="dialog1 = true"
                      >
                        delete
                      </v-icon>
                      <router-link to="#" style="text-decoration:none">
                        <v-btn color="success" round small class="mr-2 mt-2">Publish</v-btn>
                      </router-link>
                    </td>
                  </template>
                  <!-- <template v-slot:no-data>
                    <span>No data is available</span>
                  </template> -->
                  <template v-slot:no-results>
                    <v-alert :value="true" color="error" icon="warning">
                      Your search for "{{ search }}" found no results.
                    </v-alert>
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
      search:'',
      date: new Date().toISOString().substr(0, 10),
      dialog: false,
      dialog1: false,
      menu: false,
      menu1: false,
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        { text: 'Coupon Title', value: 'name',sortable: false,align: 'left' },
        { text: 'Start Date', value: 'start_date',sortable: false,align: 'left' },
        { text: 'End Date', value: 'end_date',sortable: false,align: 'left' },
        { text: 'Max Consumption per Consumer', value: 'max_consumption_per_consumer',sortable: false,align: 'left' },
        { text: 'Coupon Type', value: 'coupon_type',sortable: false,align: 'left' },
        { text: 'Coupon Categories', value: 'coupon_category',sortable: false,align: 'left' },
        { text: 'Product SKU', value: 'p_sku',sortable: false,align: 'left' },
        { text: 'Is_Published', value: 'publish',sortable: false,align: 'left' },
        { text: 'Actions', value: 'name', sortable: false,align: 'left' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        start_date: '',
        end_date: '',
        max_consumption_per_consumer: '',
        coupon_type:'',
        coupon_category: '',
        p_sku:'xyz'
      },
      defaultItem: {
        name: '',
        start_date: '',
        end_date: '',
        max_consumption_per_consumer: '',
        coupon_type:'',
        coupon_category: '',
        p_sku:'',
        description: '',
        max_allowed_total_redemptions_per_store: '',
        max_allowed_campaign_total_redemptions:'',
        max_allowed_total_redemptions:''
      },
       product_type: [
        'Product type 1',
        'Product type 2',
        'Product type 3',
        'Product type 4'
      ],
      product_category: [
        'Product Category 1',
        'Product Category 2',
        'Product Category 3',
        'Product Category 4'
      ],
      store: [
        'Store 1',
        'Store 2',
        'Store 3',
        'Store 4'
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Coupon' : 'Edit Coupon'
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
            id:'1',
            name: 'Frozen Yogurt',
            start_date: 159,
            end_date: 6.0,
            max_consumption_per_consumer:'5',
            coupon_type: 24,
            coupon_category: 4.0,
            p_sku:'123',
            max_allowed_campaign_total_redemptions:'',
            max_allowed_total_redemptions:'',
            publish:'publish'

          },
          
          {
            id:'2',
            name: 'Lollipop',
            start_date: 392,
            end_date: 0.2,
            max_consumption_per_consumer:'5',
            coupon_type: 98,
            coupon_category: 0,
            p_sku:'123',
            max_allowed_campaign_total_redemptions:'',
            max_allowed_total_redemptions:'',
            publish:'publish'
          },
          {
            id:'3',
            name: 'Honeycomb',
            start_date: 408,
            end_date: 3.2,
            max_consumption_per_consumer:'5',
            coupon_type: 87,
            coupon_category: 6.5,
            p_sku:'123',
            max_allowed_campaign_total_redemptions:'',
            max_allowed_total_redemptions:'',
            publish:'publish'
          },
          {
            id:'4',
            name: 'Donut',
            start_date: 452,
            end_date: 25.0,
            max_consumption_per_consumer:'5',
            coupon_type: 51,
            coupon_category: 4.9,
            p_sku:'123',
            max_allowed_campaign_total_redemptions:'',
            max_allowed_total_redemptions:'',
            publish:'publish'
          },
          {
            id:'5',
            name: 'KitKat',
            start_date: 518,
            end_date: 26.0,
            max_consumption_per_consumer:'5',
            coupon_type: 65,
            coupon_category: 7,
            p_sku:'123',
            max_allowed_campaign_total_redemptions:'',
            max_allowed_total_redemptions:'',
            publish:'publish'
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