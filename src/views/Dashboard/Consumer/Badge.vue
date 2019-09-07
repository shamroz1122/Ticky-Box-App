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
   <v-container fluid fill-height grid-list>
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 lg12 sm12 md12>
                <v-responsive>
                    <v-img
                        :src="require('../../../assets/download.png')"
                        class="my-5"
                        contain
                        height="250"
                        ></v-img>
                    </v-responsive>
                </v-flex>
                <v-flex xs12>
                    <p class="title text-xs-center">Please Scan This QRCode to your nearest store</p>
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
export default {
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
