<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
      <v-layout row wrap justify-space-between class="text-uppercase my-auto mt-3 pt-2 pl-3 white--text" style="background-color:#37474F;">
        <v-flex xs8 class="title my-auto my-2"> <span > 5 Featured Coupons </span></v-flex>
        <v-flex xs4>
          <router-link to="">
              <v-btn flat class="white white--text right mt-0" outline>view all</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
     
        <v-list v-for="(n, i) in 5" :key="i">
          <v-list-tile  class="text--black" to="/couponpg"  avatar>
           <v-list-tile-avatar>
              <v-icon class="grey  white--text">attach_money</v-icon>
            </v-list-tile-avatar>
              <v-list-tile-content>
                  <v-list-tile-title>
                      {{name}} <span class="right"> {{ end_date }} </span>
                  </v-list-tile-title>     
              </v-list-tile-content>   
          </v-list-tile>
           <v-divider></v-divider> 
        </v-list>
        
      <v-layout row wrap justify-space-between class="white--text text-uppercase my-auto pt-2 pl-3 mt-5" style="background-color:#37474F;">
        <v-flex xs8 class="title my-auto my-2">5 Newest Coupons</v-flex>
        <v-flex xs4>
          <router-link to="/">
              <v-btn flat class="white white--text right mt-0" outline>view all</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <v-list v-for="(n, i) in 5" :key="i">
          <v-list-tile  class="text--black" avatar>
            <v-list-tile-avatar>
              <v-icon class="grey  white--text">attach_money</v-icon>
            </v-list-tile-avatar>
              <v-list-tile-content>
                  <v-list-tile-title>
                      {{name}} <span class="right"> {{ end_date }} </span>
                  </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider> 
      </v-list>
       <v-layout row wrap justify-space-between class="white--text text-uppercase my-auto pt-2 pl-3 mt-5" style="background-color:#37474F;">
        <v-flex xs8 class="title my-auto my-2">Top five Active/Popular Coupons</v-flex>
        <v-flex xs4>
          <router-link to="/">
              <v-btn flat class="white white--text right mt-0" outline>view all</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <v-list v-for="(n, i) in 5" :key="i">
          <v-list-tile  class="text--black" avatar>
            <v-list-tile-avatar>
              <v-icon class="grey  white--text">attach_money</v-icon>
            </v-list-tile-avatar>
              <v-list-tile-content>
                  <v-list-tile-title>
                      {{name}} <span class="right"> {{ end_date }} </span>
                  </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider> 
      </v-list>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: 'Coupon Name',
      end_date: '2019/11/1'
    }
  }
}
</script>