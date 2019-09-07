<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <div>
      <v-container>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-container>
      <!-- Features Products  start-->
      <v-container class="my--40">
        <v-layout row wrap justify-space-between class="white--text text-uppercase my-auto mt-5 pt-1 pl-3" style="background-color:#37474F;">
          <v-flex xs8 class="title my-auto">Features deals</v-flex>
          <v-flex xs4>
            <router-link to="/features_deals">
              <v-btn flat class="white white--text right mt-0" outline>view all</v-btn>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xl>
        <v-layout row wrap>
            <!-- One product start -->
            <v-flex xs12 sm6 md6 lg3 v-for="n in 4" :key="n" class="mt-4">
              <v-card>
                <v-img
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" 
                  width="auto">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <!-- <span class="title">Top 10 Australian beaches</span> -->
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <center>
                <v-card-title>
                  <div class="ml-auto mr-auto">
                    <span >Coupon Title</span><br>
                    <span>Product Name</span><br>
                    <span>$ 50</span><br>
                    <span class="grey--text">Expire on: 01/09/2019</span>
                  </div>
                </v-card-title>
                </center>
                <center>
                  <v-btn 
                  color="success" white
                  to="/pin_products"
                  >
                  Pin
                  </v-btn>
                  <v-btn color="success" to="/view_product">View</v-btn>
                  <!-- <a class="success  white--text pl-3 pr-3 pt-2 pb-2">Pin </a>&nbsp;
                  <a class="success  white--text pl-3 pr-3 pt-2 pb-2">View</a> -->
                </center>
                <v-card-actions>
                  <!-- <v-btn  class="success">Pin</v-btn> -->
                  <!-- <v-btn  class="success">View</v-btn> -->
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- One product end -->
        </v-layout>
      </v-container>
      <!-- Features Products  end-->

      <!-- Latest Products  start-->
      <v-container class="my--40">
        <v-layout row wrap justify-space-between class="white--text text-uppercase my-auto mt-5 pt-1 pl-3" style="background-color:#37474F;">
          <v-flex xs8 class="title my-auto pt-1">Latest deals</v-flex>
          <v-flex xs4>
            <router-link to="/latest_deals">
              <v-btn flat class="white white--text right mt-0" outline>view all</v-btn>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xl>
        <v-layout row wrap>
            <!-- One product start -->
            <v-flex xs12 sm6 md6 lg3 v-for="n in 4" :key="n" class="mt-4">
              <v-card>
                <v-img
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" 
                  width="auto">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <!-- <span class="title">Top 10 Australian beaches</span> -->
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <center>
                <v-card-title>
                  <div class="ml-auto mr-auto">
                    <span >Coupon Title</span><br>
                    <span>Product Name</span><br>
                    <span>$ 50</span><br>
                    <span class="grey--text">Expire on: 01/09/2019</span>
                  </div>
                </v-card-title>
                </center>
                <center>
                <v-btn 
                  color="success" 
                  to="/pin_products"
                  >
                  Pin
                  </v-btn>
                  <v-btn color="success" to="/view_product">View</v-btn>
                </center>
                <v-card-actions>
                  <!-- <v-btn  class="success">Pin</v-btn> -->
                  <!-- <v-btn  class="success">View</v-btn> -->
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- One product end -->
        </v-layout>
      </v-container>
      <!-- Latest Products  end-->

      <!-- Popular Products  start-->
      <v-container class="my--40">
        <v-layout row wrap justify-space-between class="white--text text-uppercase my-auto mt-5 pt-1 pl-3" style="background-color:#37474F;">
          <v-flex xs8 class="title my-auto pt-1">Popular deals</v-flex>
          <v-flex xs4>
            <router-link to="/popular_deals">
              <v-btn flat class="white white--text right mt-0" outline>view all</v-btn>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xl>
        <v-layout row wrap>
            <!-- One product start -->
            <v-flex xs12 sm6 md6 lg3 v-for="n in 4" :key="n" class="mt-4">
              <v-card>
                <v-img
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" 
                  width="auto">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <!-- <span class="headline">Top 10 Australian beaches</span> -->
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <center>
                <v-card-title>
                  <div class="ml-auto mr-auto">
                    <span >Coupon Title</span><br>
                    <span>Product Name</span><br>
                    <span>$ 50</span><br>
                    <span class="grey--text">Expire on: 01/09/2019</span>
                  </div>
                </v-card-title>
                </center>
                <center>
                  <v-btn 
                  color="success" 
                  to="/pin_products"
                  >
                  Pin
                  </v-btn>
                  <v-btn color="success" to="/view_product">View</v-btn>
                </center>
                <v-card-actions>
                  <!-- <v-btn  class="success">Pin</v-btn> -->
                  <!-- <v-btn  class="success">View</v-btn> -->
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- One product end -->
        </v-layout>
      </v-container>
      <!-- Popular Products  end-->
    </div>
  </div>
</template>
<script>
import ProductDialog from '@/components/ProductDialog.vue'
import Loader from '@/components/Loader.vue'

export default {
  components:{
    ProductDialog,
    'app-loader': Loader
    },
  data(){
    return{
      loader:true,
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
    }
  }
}
</script>

