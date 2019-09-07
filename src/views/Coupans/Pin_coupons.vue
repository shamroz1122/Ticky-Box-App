<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
      <v-layout row wrap>
          <v-flex xs12>
              <template>
                  <h1>Pin Coupons</h1>
                  <div>
                      <div class="mb-2">
                          <v-btn color="primary" @click="toggleOrder">by title </v-btn>
                          <!-- <v-btn color="primary" @click="nextSort">by start_date</v-btn> -->
                      </div>
                      <v-data-table :headers="headers" :items="desserts" :search="search" :pagination.sync="pagination" class="elevation-1" >
                      <template v-slot:items="props">
                          <td>{{ props.item.title }}</td>
                          <td class="text-xs-left">{{ props.item.product_name }}</td>
                          <td class="text-xs-left">{{ props.item.start_date }}</td>
                          <td class="text-xs-left">{{ props.item.end_date }}</td>
                          <td class="text-xs-left">{{ props.item.dicount }}</td>
                          <td class="text-xs-left">{{ props.item.max_redemption_per_consumer }}</td>
                          <td class="text-xs-left">{{ props.item.coupon_category }}</td>
                          <td class="text-xs-left">
                            <svg title="Unpin Coupon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#e74c3c"><g id="surface1"><path d="M144.69231,0.92308c-2.07692,-0.02884 -4.24039,1.03846 -6.23077,3.46154l-46.84615,59.53846c-0.86538,-0.14423 -1.70192,-0.11538 -2.53846,-0.23077l-57.92308,-57.92308c-1.78846,-1.84615 -4.41346,-2.625 -6.92308,-2.07692c-2.76923,0.49038 -4.99038,2.50962 -5.76923,5.19231c-0.77885,2.71154 0.02884,5.59616 2.07692,7.5l155.07692,155.07692c2.94231,2.94231 7.67308,2.94231 10.61538,0c2.94231,-2.9423 2.94231,-7.67307 0,-10.61538l-57.46154,-57.46154c-0.14423,-1.15385 -0.25961,-2.30769 -0.46154,-3.46154h0.23077l59.30769,-45.46154c4.875,-3.89423 4.18269,-9.17307 0.69231,-12.69231l-38.07692,-38.07692c-1.61538,-1.61538 -3.69231,-2.74039 -5.76923,-2.76923zM52.84615,68.76923c-6.375,3.11538 -12.49038,7.64423 -18.69231,13.84615l28.38462,28.38462l-62.07692,81l81,-62.07692l28.38462,28.38462c6.20192,-6.20192 10.47116,-12.31731 13.61538,-18.69231z"></path></g></g></g></svg>
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
            text: 'Coupon Title',
            align: 'left',
            value: 'title'
          },
        { text: 'Product Name', value: 'alories' },
          { text: 'Start Date', value: 'start_date' },
          { text: 'End Date', value: 'end_date' },
          { text: 'Discount', value: 'discount' },
          { text: 'Max Redemption Per Consumer', value: 'max_redemption_per_consumer' },
          { text: 'Coupon Category', value: 'coupon_category' },
          { text: 'Actions', value: 'actions' }
        ],
        desserts: [
          {
            id:'',
            title: 'Frozen Yogurt',
            product_name: 159,
            start_date: 6.0,
            end_date:35,
            discount:1,
            max_redemption_per_consumer: 24,
            coupon_category: '1%',
          },
          {
            id:'',
            title: 'Ice cream sandwich',
            product_name: 237,
            start_date: 9.0,
            end_date:35,
            discount:1,
            max_redemption_per_consumer: 37,
            coupon_category: '1%',
          },
          {
            id:'',
            title: 'Eclair',
            product_name: 262,
            start_date: 16.0,
            end_date:35,
            discount:1,
            max_redemption_per_consumer: 23,
            coupon_category: '7%',
          },
          {
            id:'',
            title: 'Cupcake',
            product_name: 305,
            start_date: 3.7,
            end_date:35,
            discount:1,
            max_redemption_per_consumer: 67,
            coupon_category: '8%',
          },
          {
            id:'',
            title: 'Gingerbread',
            product_name: 356,
            start_date: 16.0,
            end_date:35,
            discount:1,
            max_redemption_per_consumer: 49,
            coupon_category: '16%',
          },
          {
            id:'',
            title: 'KitKat',
            product_name: 518,
            start_date: 26.0,
            end_date:35,
            discount:1,
            max_redemption_per_consumer: 65,
            coupon_category: '6%',
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
