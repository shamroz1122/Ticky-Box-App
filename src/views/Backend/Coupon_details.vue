<template>
  <div>
    <app-header></app-header>
    <app-drawer></app-drawer>
    <v-container>
      <h1>Coupon Details</h1>
    <v-tabs
      v-model="active"
      color="white"
      light
      slider-color="yellow"
    >
      <v-tab ripple>
        Demographic

      </v-tab>
      <v-tab-item>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Coupon Name:</span> Coupon XYZ</v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Coupon SKU</span> R-98-9</v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti reiciendis aliquam ad </v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Start Date</span> 04/09/2019</v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">End Date</span> 04/10/2019</v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Max Redemption Per Consumer:</span> 5</v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Max Redemption Per Store:</span> 3</v-card-text>
        </v-card>
        <v-card>
          <v-card-text> <span class="font-weight-bold">Max Redemption Per Merchant:</span> 2</v-card-text>
        </v-card>
        
      </v-tab-item>
      <!-- 2nd -->
      <v-tab ripple>
        Products
      </v-tab>
      <v-tab-item>
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
                  <v-container grid-list-md>
                  <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.name" label="Product name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.sku" label="SKU"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-select
                      v-model="editedItem.product_type"
                      :items="product_type"
                      label="Product Type"
                      ></v-select>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-select
                      v-model="editedItem.product_category"
                      :items="product_category"
                      label="Select Product Category"
                      ></v-select>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-select
                      v-model="editedItem.product_brand"
                      :items="product_brand"
                      label="Select Product brand"
                      ></v-select>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-textarea v-model="editedItem.short_description" label="Product short detail"></v-textarea>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.short_description" label="" type="file"></v-text-field>
                      </v-flex>
                      
                  </v-layout>
                  </v-container>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
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
                <td class="justify-center layout px-0">
                <router-link to="/product_details" style="text-decoration:none">
                    <v-icon to="/product_details" color="success" small class="mr-2 mt-3">visibility</v-icon>
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
                    @click="deleteItem(props.item)"
                >
                    delete
                </v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                  <span>N data avaliable</span>
              </template>
            </v-data-table>
          </div>
        </template>
      </v-tab-item>
      <!-- 3rd -->
      <v-tab ripple>
        Stores
      </v-tab>
      <v-tab-item>
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
              <v-dialog v-model="sdialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="success" dark class="mb-2" v-on="on">Add Store</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ sformTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="seditedItem.name" label="Store name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="seditedItem.description" label="Description"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="seditedItem.phone" label="Phone"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md8>
                          <v-text-field v-model="seditedItem.address" label="Address"></v-text-field>
                        </v-flex>
                          
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="sheaders"
              :items="sdesserts"
              class="elevation-1"
            >
              <template v-slot:items="sprops">
                <td>{{ sprops.item.name }}</td>
                <td class="text-xs-left">{{ sprops.item.description }}</td>
                <td class="text-xs-left">{{ sprops.item.address }}</td>
                <td class="text-xs-left">{{ sprops.item.phone }}</td>
                <td class="text-xs-left">Manufacturer/Merchant</td>
                <td class="justify-center layout px-0">
                  <router-link to="/store_details" style="text-decoration:none">
                    <v-icon @click="xyz" color="success" small class="mr-2 mt-3">visibility</v-icon>
                  </router-link>
                  <v-icon
                    color="primary"
                    small
                    class="mr-2"
                    @click="seditItem(sprops.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    color="error"
                    small
                    @click="sdeleteItem(sprops.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                <span>No data available</span>
              </template>
            </v-data-table>
          </div>
        </template>
      </v-tab-item>
      <!-- 4th -->
       <v-tab ripple>
        Report
        </v-tab>
        <v-tab-item>
            <v-card>
              <v-layout row wrap>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemptions</div>
                      <pie-chart :data="ConsumerRedemption" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Redemptions by Gender </div>
                      <pie-chart :data="redemptionByGender" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Redemptions by Coupon Category </div>
                      <pie-chart :data="redemptionByCouponCategory" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Redemptions by Store </div>
                      <pie-chart :data="redemptionByStore" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemptions by Age </div>
                      <pie-chart :data="redemptionByage" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemption by Job  Industry</div>
                      <pie-chart :data="redemptionByIndustry" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemption by Marital Status</div>
                      <pie-chart :data="redemptionByMartialStatus" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemption by Has Children</div>
                      <pie-chart :data="redmptonByHasChildren" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <!-- <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemptions</div>
                      <pie-chart :data="chartData" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm3 class="mt-5">
                  <v-card flat>
                    <div class="title text-xs-center pt-2">Consumer Redemptions</div>
                      <pie-chart :data="chartData" id="myPieCharts"></pie-chart>
                  </v-card>
                </v-flex> -->
              </v-layout>
            </v-card>
      </v-tab-item>
    </v-tabs>
    </v-container>
  </div>
</template>
// product script start
<script>
  import PieChart from "../../PieChart.js";
  export default {
    components:{
        'pie-chart': PieChart
    },
    data: () => ({
       redmptonByHasChildren: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
       redemptionByMartialStatus: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
       redemptionByIndustry: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
      redemptionByage: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
       redemptionByStore: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
      redemptionByCouponCategory: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
     ConsumerRedemption: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
      redemptionByGender: {
        labels: ["Demo 1", "Demo 2"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [35000 , 50000]
          }
        ]
      },
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
      sheaders: [
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
        { text: 'Actions', value: 'name', sortable: false,align: 'left' }
      ],
      sdesserts: [],
      seditedIndex: -1,
      seditedItem: {
        name: '',
        description: '',
        address: '',
        phone: '',
        is_manufacturer:''
       
      },
      sdefaultItem: {
        name: '',
        description: '',
        address: '',
        phone: '',
        is_manufacturer:''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Product' : 'Edit Product'
      },
      sformTitle () {
        return this.editedIndex === -1 ? 'Add Store' : 'Edit Store'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      sdialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize(),
      this.sinitialize()
    },
    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurts',
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
        confirm('Are you sure you want to delete this product?') && this.desserts.splice(index, 1)
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
      },
    //   Deafult
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
    //   Store data
      sinitialize () {
        this.sdesserts = [
          {
            name: 'Frozen',
            description: 159,
            address: 6.0,
            phone: 24,
            is_manufacturer:''
          }
        ]
      },
       seditedItem: {
        name: '',
        description: '',
        address: '',
        phone: '',
        is_manufacturer:''
       
      },
      sdefaultItem: {
        name: '',
        description: '',
        address: '',
        phone: '',
        is_manufacturer:''
      },
      seditItem (item) {
        this.seditedIndex = this.sdesserts.indexOf(item)
        this.seditedItem = Object.assign({}, item)
        this.sdialog = true
      },

      sdeleteItem (item) {
        const index = this.sdesserts.indexOf(item)
        confirm('Are you sure you want to delete this store?') && this.sdesserts.splice(index, 1)
      },

      sclose () {
        this.sdialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      ssave () {
        if (this.editedIndex > -1) {
          Object.assign(this.sdesserts[this.editedIndex], this.seditedItem)
        } else {
          this.sdesserts.push(this.seditedItem)
        }
        this.close()
      }
    }
  }
</script>
<style>
#myPieChart {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 60px;
  width: 400px;
}
</style>