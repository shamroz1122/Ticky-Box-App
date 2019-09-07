<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
      <v-layout row wrap>
          <v-flex xs12>
              <template>
                  <h1>Pin Products</h1>
                  <div>
                      <div class="mb-2">
                          <v-btn color="primary" @click="toggleOrder">by title </v-btn>
                          <!-- <v-btn color="primary" @click="nextSort">by price</v-btn> -->
                      </div>
                      <v-data-table :headers="headers" :items="desserts" :search="search" :pagination.sync="pagination" class="elevation-1" >
                      <template v-slot:items="props">
                          <td>{{ props.item.title }}</td>
                          <td class="text-xs-left">{{ props.item.sku }}</td>
                          <td class="text-xs-left">{{ props.item.price }}</td>
                          <td class="text-xs-left">{{ props.item.product_type }}</td>
                          <td class="text-xs-left">{{ props.item.product_category }}</td>
                          <td class="text-xs-left">{{ props.item.product_brand }}</td>
                          <td class="text-xs-left">
                            <router-link to="/shopping_summary">
                              <svg title="Buy detail" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g id="original-icon" fill="#2ecc71"><g id="surface1"><path d="M5.30769,0c-4.06731,0.57692 -6.92308,4.35577 -6.34615,8.42308c0.57692,4.06731 4.35577,6.92308 8.42308,6.34615h25.61538c4.24039,0 5.59616,0.83654 6.69231,1.84615c1.09616,1.00962 2.48077,3 3.69231,7.15385c2.48077,8.39423 34.61538,117.69231 34.61538,117.69231c0.0577,0.23077 0.14423,0.46154 0.23077,0.69231c0,0 8.19231,20.30769 28.84615,20.30769h57.92308c2.65385,0.02884 5.13462,-1.35577 6.49038,-3.66346c1.32693,-2.30769 1.32693,-5.13461 0,-7.4423c-1.35576,-2.30769 -3.83654,-3.69231 -6.49038,-3.66346h-57.92308c-10.90384,0 -15.23077,-11.07692 -15.23077,-11.07692c0,-0.02884 -1.06731,-3.43269 -1.15385,-3.69231h60c7.61538,0 11.04808,-6.375 11.76923,-8.76923l26.53846,-57c4.09616,-9.86538 1.96154,-22.84615 -13.15385,-22.84615h-107.07692c-1.24039,0 -2.59615,0.31731 -3.92308,0.69231c-2.65385,-9.02884 -6.83654,-23.56731 -7.38462,-25.38462c-1.55769,-5.27885 -3.60577,-10.24039 -7.84615,-14.07692c-4.24039,-3.83654 -10.09615,-5.53846 -16.61538,-5.53846h-25.61538c-0.23077,0 -0.46154,0 -0.69231,0c-0.23077,0 -0.46154,0 -0.69231,0c-0.23077,0 -0.46154,0 -0.69231,0zM71.07692,59.53846h31.15385v13.15385h-27l-3.46154,-11.07692c-0.23077,-0.80769 -0.60577,-1.52884 -0.69231,-2.07692zM111.92308,59.53846h19.84615v13.15385h-19.84615zM141.46154,59.53846h34.15385c-0.08654,0.51923 -0.23077,0.98077 -0.46154,1.61538l-5.30769,11.53846h-28.38462zM78.23077,82.38462h24v12.46154h-20.07692zM111.92308,82.38462h19.84615v12.46154h-19.84615zM141.46154,82.38462h23.76923l-5.76923,12.46154h-18zM85.15385,104.53846h17.07692v13.15385h-12.23077c-0.28846,0 -0.46154,-0.08654 -0.69231,-0.23077zM111.92308,104.53846h19.84615v13.15385h-19.84615zM141.46154,104.53846h13.61538l-6.23077,13.15385h-7.38462zM103.38462,163.84615c-7.38462,0 -13.38462,6 -13.38462,13.38462c0,7.38462 6,13.38462 13.38462,13.38462c7.38462,0 13.38462,-6 13.38462,-13.38462c0,-7.38462 -6,-13.38462 -13.38462,-13.38462zM147.69231,163.84615c-7.38462,0 -13.38462,6 -13.38462,13.38462c0,7.38462 6,13.38462 13.38462,13.38462c7.38462,0 13.38462,-6 13.38462,-13.38462c0,-7.38462 -6,-13.38462 -13.38462,-13.38462z"></path></g></g></g></svg>
                            </router-link>
                              &nbsp;
                              <svg title="Unpin product" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#e74c3c"><g id="surface1"><path d="M144.69231,0.92308c-2.07692,-0.02884 -4.24039,1.03846 -6.23077,3.46154l-46.84615,59.53846c-0.86538,-0.14423 -1.70192,-0.11538 -2.53846,-0.23077l-57.92308,-57.92308c-1.78846,-1.84615 -4.41346,-2.625 -6.92308,-2.07692c-2.76923,0.49038 -4.99038,2.50962 -5.76923,5.19231c-0.77885,2.71154 0.02884,5.59616 2.07692,7.5l155.07692,155.07692c2.94231,2.94231 7.67308,2.94231 10.61538,0c2.94231,-2.9423 2.94231,-7.67307 0,-10.61538l-57.46154,-57.46154c-0.14423,-1.15385 -0.25961,-2.30769 -0.46154,-3.46154h0.23077l59.30769,-45.46154c4.875,-3.89423 4.18269,-9.17307 0.69231,-12.69231l-38.07692,-38.07692c-1.61538,-1.61538 -3.69231,-2.74039 -5.76923,-2.76923zM52.84615,68.76923c-6.375,3.11538 -12.49038,7.64423 -18.69231,13.84615l28.38462,28.38462l-62.07692,81l81,-62.07692l28.38462,28.38462c6.20192,-6.20192 10.47116,-12.31731 13.61538,-18.69231z"></path></g></g></g></svg>
                          </td>
                        </template>
                      </v-data-table>
                  </div>
              </template>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {
          sortBy: 'title'
        },
        selected: [],
        headers: [
          {
            text: 'Product Title',
            align: 'left',
            value: 'title'
          },
        { text: 'SKU', value: 'alories' },
          { text: 'Price', value: 'price' },
          { text: 'Product Type', value: 'product_type' },
          { text: 'Product Category', value: 'product_category' },
          { text: 'Product Brand', value: 'product_brand' },
          { text: 'Actions', value: 'actions' }
        ],
        desserts: [
          {
            id:'',
            title: 'Frozen Yogurt',
            sku: 159,
            price: 6.0,
            product_type: 24,
            product_category: '1%',
            product_brand:'Wao'
          },
          {
            id:'',
            title: 'Ice cream sandwich',
            sku: 237,
            price: 9.0,
            product_type: 37,
            product_category: '1%',
            product_brand:'Wao'
          },
          {
            id:'',
            title: 'Eclair',
            sku: 262,
            price: 16.0,
            product_type: 23,
            product_category: '7%',
            product_brand:'Wao'
          },
          {
            id:'',
            title: 'Cupcake',
            sku: 305,
            price: 3.7,
            product_type: 67,
            product_category: '8%',
            product_brand:'Wao'
          },
          {
            id:'',
            title: 'Gingerbread',
            sku: 356,
            price: 16.0,
            product_type: 49,
            product_category: '16%',
            product_brand:'Wao'
          },
          {
            id:'',
            title: 'KitKat',
            sku: 518,
            price: 26.0,
            product_type: 65,
            product_category: '6%',
            product_brand:'Wao'
          }
        ]
      }
    },
    methods: {
      toggleOrder () {
        this.pagination.descending = !this.pagination.descending
      },
      nextSort () {
        let index = this.headers.findIndex(h => h.value === this.pagination.sortBy)
        index = (index + 1) % this.headers.length
        index = index === 0 ? index + 1 : index
        this.pagination.sortBy = this.headers[index].value
      }
    }
  }
</script>
