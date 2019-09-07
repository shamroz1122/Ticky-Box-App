<template>
  <div>
    <app-header></app-header>
     <MerchNavbar></MerchNavbar>
    <v-container>
      <v-layout row wrap>
        <v-container>
          <v-flex xs12>
            <template>
              <div>
                <v-toolbar flat color="white">
                  <v-toolbar-title>Product List</v-toolbar-title>
                  <v-divider
                    class="mx-2"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="success" dark class="mb-2" v-on="on">Add Product</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md class="mt-7">
                          <v-layout wrap>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.name" label="Product name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.sku" label="SKU"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
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
                              v-model="editedItem.product_brand"
                              :items="product_brand"
                              label="Select Product brand"
                            ></v-select>
                            </v-flex>
                            <v-flex xs12>
                              <v-textarea v-model="editedItem.short_description" label="Product short detail"></v-textarea>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field v-model="editedItem.short_description" label="" type="file"></v-text-field>
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
                    <td class="text-xs-left">{{ props.item.sku }}</td>
                    <td class="text-xs-left">{{ props.item.price }}</td>
                    <td class="text-xs-left">Manufacturer</td>
                    <td class="text-xs-left">{{ props.item.product_type }}</td>
                    <td class="text-xs-left">{{ props.item.product_category }}</td>
                    <td class="text-xs-left">{{ props.item.product_brand }}</td>
                    <td class="text-xs-left"><img src="../../../assets/logos.png" alt="" class="my-3" width="40px"></td>
                    <td class="justify-center layout px-0">
                      
                      <router-link to="/product_details" style="text-decoration:none">
                        <v-icon to="/product_details" color="success" small class="mr-2 mt-3">visibility</v-icon>
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
                      <router-link to="/product_details" style="text-decoration:none">
                        <v-btn color="success" small round class="mr-2 mt-2">Publish</v-btn>
                      </router-link>
                    </td>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
                  </template>
                </v-data-table>
              </div>
            </template>
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
          </v-flex>
          </v-container>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MerchNavbar from '@/components/MerchNavbar.vue'
  export default {
     components:{
        // 'admin-nav':AdminNav,
        'MerchNavbar':MerchNavbar,
        // 'madmin-content':MAdminContent
    } ,
    data: () => ({
      dialog: false,
      dialog1: false,
      headers: [
        {
          text: 'Product Title',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'SKU', value: 'sku',sortable: false,align: 'left' },
        { text: 'Price', value: 'price',sortable: false,align: 'left' },
        { text: 'Is_Manufacturer', value: 'price',sortable: false,align: 'left' },
        { text: 'Product Type', value: 'product_type',sortable: false,align: 'left' },
        { text: 'Product Categories', value: 'product_category',sortable: false,align: 'left' },
        { text: 'Product Brand', value: 'product_brand',sortable: false,align: 'left' },
        { text: 'Image', value: 'image',sortable: false,align: 'left' },
        { text: 'Actions', value: 'name', sortable: false,align: 'left' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        sku: '',
        price: '',
        product_type: '',
        is_manufacturer:'',
        product_category: '',
        product_brand:'xyz'
      },
      defaultItem: {
        name: '',
        sku: '',
        price: '',
        product_type: '',
        is_manufacturer:'',
        product_category: '',
        product_brand:''
      },
       product_type: [
        'Product type 1',
        'Product type 2',
        'Product type 3',
        'Product type 4'
      ],
      short_description: '',
      long_description: '',
      product_category: [
        'Product Category 1',
        'Product Category 2',
        'Product Category 3',
        'Product Category 4'
      ],
      product_brand: [
        'Product Brand 1',
        'Product Brand 2',
        'Product Brand 3',
        'Product Brand 4'
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Product' : 'Edit Product'
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
            sku: 159,
            price: 6.0,
            product_type: 24,
            is_manufacturer:'',
            product_category: 4.0,
            product_brand:'xyz'
          },
          
          {
            name: 'Lollipop',
            sku: 392,
            price: 0.2,
            product_type: 98,
            is_manufacturer:'',
            product_category: 0,
            product_brand:'xyz'
          },
          {
            name: 'Honeycomb',
            sku: 408,
            price: 3.2,
            product_type: 87,
            is_manufacturer:'',
            product_category: 6.5,
            product_brand:'xyz'
          },
          {
            name: 'Donut',
            sku: 452,
            price: 25.0,
            product_type: 51,
            is_manufacturer:'',
            product_category: 4.9,
            product_brand:'xyz'
          },
          {
            name: 'KitKat',
            sku: 518,
            price: 26.0,
            product_type: 65,
            is_manufacturer:'',
            product_category: 7,
            product_brand:'xyz'
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