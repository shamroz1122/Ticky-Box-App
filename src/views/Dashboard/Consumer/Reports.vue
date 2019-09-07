<template>
    <div>
        <v-toolbar flat  class="blue-grey darken-3 white--text">
            <div class="">
                <v-toolbar-side-icon @click="drawer=!drawer" class="white--text"></v-toolbar-side-icon>
            </div>
            <v-toolbar-title class="text-uppercase mr-5">
                <router-link class="white--text py-5 mr-5 title" to="/" style="text-decoration:none">tickkybox</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to="/signin"  class="white--text body-2 text-uppercase" style="text-decoration:none">
               <font-awesome-icon  size="2x" color="white" :icon="['fas','sign-out-alt']"/>
            </router-link>
        </v-toolbar>
        <v-container fluid grid-list-md>
            <v-layout row wrap justify-center align-center >
                <v-flex xs12> <p class="title text-lg-center">Total Consumer Saving</p> </v-flex>
                    <v-flex xs5 sm5 lg3 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                        <v-card flat>
                        <v-container fill-height
                                        fluid
                                        pa-2>
                            <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                                <v-flex xs12 lg6 md6>
                                <v-card-text class="text-xs-center title">
                                        <font-awesome-icon  color="#F5584D" size="2x" :icon="['fas','money-bill-wave']"/>
                                    </v-card-text>
                                    <v-card-text class="text-xs-center display-2 font-weight-medium black--text">
                                        75
                                    </v-card-text>
                                    <span class="subheading primary--text font-weight-medium" >Total lifetime saving</span>
                                </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>

                <v-flex xs5 sm5 lg3 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                    <v-card flat>
                        <v-container fill-height
                                    fluid
                                    pa-2>
                    <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                        <v-flex xs12 lg6 md6>
                            <v-card-text class="text-xs-center title">
                               <font-awesome-icon  color="#A8D6FA" size="2x" :icon="['fas','wallet']"/>
                            </v-card-text>
                            <v-card-text class="text-xs-center display-2 font-weight-medium black--text">
                               49
                            </v-card-text>
                        <span class="subheading primary--text font-weight-medium tit" > Total saving this year</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
            </v-flex>

                <v-flex xs10 sm10 lg3 md10 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                    <v-card flat>
                        <v-container fill-height
                                    fluid
                                    pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                       <v-card-text class="text-xs-center title">
                            <font-awesome-icon color="green" size="2x" :icon="['fas','money-check-alt']"/>
                        </v-card-text>
                        <v-card-text class="text-xs-center display-2 font-weight-medium black--text">
                            168
                        </v-card-text>
                        <span class="subheading primary--text font-weight-medium tit" >Total saving last month</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap justify-center > 
           <v-flex xs10 sm10 lg3 md10 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                    <v-card flat>
                        <v-container fill-height
                                    fluid
                                    pa-2>
                    <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                        <v-flex xs12 lg6 md6>
                        <v-card-text class="text-xs-center title">
                            <font-awesome-icon color="red" size="2x" :icon="['fas','money-check-alt']"/>
                        </v-card-text>
                        <v-card-text class="text-xs-center display-2 font-weight-medium black--text">
                            25
                        </v-card-text>
                        <span class="subheading primary--text font-weight-medium tit" >Total saving last month</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
            </v-flex>
        <v-flex xs5 sm5 lg6 md5 class="mb-2 pa-3 ml-2">
    </v-flex>
</v-layout>
</v-container>
<v-container fluid grid-list-md>
    <v-layout row wrap justify-center align-center >
        <v-flex xs12> <p class="title text-lg-center">Total Consumer Saving by Category</p> </v-flex>
            <v-flex xs10 sm10 lg3 md10 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                <v-card flat>
                    <v-container fill-height
                                fluid
                                pa-2>
                            <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                                <v-flex xs12 lg6 md6>
                                <v-card-text class="text-xs-center title">
                                        <font-awesome-icon  color="#F5584D" size="2x" :icon="['fas','cubes']"/>
                                    </v-card-text>
                                    <v-card-text class="text-xs-center display-2 font-weight-medium black--text">
                                        75
                                    </v-card-text>
                                    <span class="subheading primary--text font-weight-medium" >Total Lifetime saving by Category</span>
                                </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                <v-flex xs5 sm5 lg6 md5 class="mb-2 pa-3 ml-2">
            </v-flex>
        </v-layout>
    </v-container>
        <v-navigation-drawer v-model="drawer" app>
            <v-layout column align-center>
                <v-flex class="mt-4">
                    <v-avatar
                        size="100"
                        color=""
                    >
                        <img src="https://miningbusinessdata.com/wp-content/uploads/2018/01/programmer.png" alt="alt">
                    </v-avatar>
                </v-flex>
                    <p class="subheading font-weight-bold">Welcome Jhon</p>
            </v-layout>
            <v-list>
            <div class="title ml-3 mb-3">Consumer Dashboard</div>
                <router-link v-for="(menu, i) in menus" :key="i" :to="menu.route" style="text-decoration:none;">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{menu.title}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import SalesChart from '../../../components/charts/SalesChart.vue'
export default {
    components:{
        'sale-chart':SalesChart,
    },
    data(){
        return{
            drawer:false,
            menus: [
                // { title: 'Dashboard', route: '/consumerdashboard' },
                { title: 'General', route: '/dashboard/consumer/home' },
                { title: 'IBadge', route: '/dashboard/consumer/ibadge' },
                { title: 'My Coupon Categories',  },
                { title: 'Reports', route: '/dashboard/consumer/report' },
            ]
        }
    }
}
</script>



  
