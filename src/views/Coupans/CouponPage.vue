<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
        <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
     
          <v-layout
            column
            fill-height
          >
            <!-- <v-card-title>
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title> -->

            <v-spacer></v-spacer>

            <v-card-title class="black--text ">
              <div class="display-1 pl-5 pt-5">Coupon Name</div>
            </v-card-title>
          </v-layout>

        <v-list two-line>
          <v-list-tile >
            <v-list-tile-action>
              <!-- <v-icon color="indigo">phone</v-icon> -->
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>6520124</v-list-tile-title>
              <v-list-tile-sub-title>Coupon SKU</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Charger Laptop</v-list-tile-title>
              <v-list-tile-sub-title>Product Name</v-list-tile-sub-title>
            </v-list-tile-content>
             <v-list-tile-content>
              <v-list-tile-title>499632</v-list-tile-title>
              <v-list-tile-sub-title>Product SKU</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">date_range</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>03/02/2019</v-list-tile-title>
              <v-list-tile-sub-title>End Date</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>15%</v-list-tile-title>
              <v-list-tile-sub-title>Discount</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">assignment</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Electronics</v-list-tile-title>
              <v-list-tile-sub-title>Category</v-list-tile-sub-title>
            </v-list-tile-content>
             <v-list-tile-content>
             <v-btn color="green white--text" align-end>Redeem</v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
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