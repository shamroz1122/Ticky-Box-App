<template>
    <div>
        <v-toolbar flat  class="blue-grey darken-3 white--text">
            <div class="">
                <v-toolbar-side-icon @click="drawer=!drawer" class="white--text"></v-toolbar-side-icon>
            </div>
            <v-toolbar-title class="text-uppercase mr-5">
                <router-link class="white--text py-5 mr-5 title" to="/" style="text-decoration:none">tickkybox</router-link>
            </v-toolbar-title>
            <div v-for="(nmenu, n) in menus" :key="n" class="hidden-sm-and-down mx-3 body-2 text-uppercase">
                <!-- <div>
                    <router-link :to="nmenu.route"  class="white--text" style="text-decoration:none">
                        <span>
                            {{nmenu.title}}
                        </span>
                    </router-link>
                </div> -->
            </div>
            <v-spacer></v-spacer>
            <router-link to="/signin"  class="white--text body-2 text-uppercase" style="text-decoration:none">
                <span>
                    Sign out
                </span>
            </router-link>
        </v-toolbar>
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
            <div class="title ml-3 mb-3">Admin</div>
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
                { title: 'Dashboard', route: '/dashboard/admin/home' }
                // { title: 'Manage Requests', route: '/manage_requests' }
            ]
        }
    }
    }
</script>
