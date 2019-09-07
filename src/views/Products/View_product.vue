<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
      <v-layout row wrap>
          <!-- One product start -->
          <v-flex xs12 sm10 offset-sm1  class="mt-4">
            <v-card>
              <v-img
                class="white--text"
                height="300px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" 
                width="auto">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div class="">
                  <span class="subheading font-weight-bold">Coupon Name:</span><span>Coupon Title</span><br>
                  <span class="subheading font-weight-bold">Product Name:</span><span>Product Name</span><br>
                  <span class="subheading font-weight-bold">Coupon Expiry:</span><span class="grey--text">Expire on: 01/09/2019</span><br>
                  <span class="subheading font-weight-bold">Price:</span><span>$ 50</span><br>
                  <span class="subheading font-weight-bold">Description:</span><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quasi odit accusamus ut quo architecto alias asperiores dolorem velit eos minus ea facere libero quia ratione incidunt, exercitationem officiis quae?</span>
             
                </div>
              </v-card-title>
              <v-card-actions>
                  <v-spacer></v-spacer>
                <span class="right">
                    <v-btn 
                    color="success" 
                    to="/pin_products"
                    >
                    Pin
                    </v-btn>
                </span>
              </v-card-actions>
            </v-card>
          </v-flex>
          <!-- One product end -->
      </v-layout>
    </v-container>
  </div>
</template>
