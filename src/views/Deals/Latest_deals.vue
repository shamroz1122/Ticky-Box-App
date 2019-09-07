<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <!-- Latest Products  start-->
    <v-container class="my--40">
      <v-layout row wrap justify-space-between class="white black text-uppercase my-auto mt-5 pt-2 pl-3">
        <v-flex xs8 class="title my-auto my-2">Latest deals</v-flex>
        <v-flex xs4>
          <router-link to="/features_deals">
            <!-- <v-btn flat class="success green--text right mt-0" outline>view all</v-btn> -->
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
        <v-container  grid-list-xl>
        <v-layout row wrap>
            <!-- One product start -->
            <v-flex xs12 sm6 md4 lg3 v-for="n in 12" :key="n" class="mt-4">
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
        <!-- Latest Products  end-->
    </div>
</template>
