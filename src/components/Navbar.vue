<template>
    <div>
        <v-toolbar flat  class="blue-grey darken-3 white--text">
            <div class="hidden-md-and-up">
                <v-toolbar-side-icon @click="drawer=!drawer" class="white--text"></v-toolbar-side-icon>
            </div>
            <v-toolbar-title class="text-uppercase mr-5">
                <router-link class="white--text py-5 mr-5 title" to="/" style="text-decoration:none">tickkybox</router-link>
            </v-toolbar-title>
            <div v-for="(menu, i) in menus" :key="i" class="hidden-sm-and-down mx-3 body-2 text-uppercase">
                <div>
                    <router-link :to="menu.route"  class="white--text" style="text-decoration:none">
                        <span>
                            {{menu.title}}
                        </span>
                    </router-link>
                </div>
            </div>    
        <div class="hidden-sm-and-down mx-3 body-2 text-uppercase">
            <div>               
                <v-menu offset-y transition="scale-transition">
                    <template v-slot:activator="{ on }">
                        <router-link to=""  class="white--text" style="text-decoration:none">
                            <span v-on="on">
                                Categories
                            </span>
                        </router-link>
                    </template>
                        <v-list>
                            <v-layout row wrap>
                            <v-flex xs6>     
                            <v-list-tile-content>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"> <v-icon color="grey" class="pr-2">list</v-icon>Organic</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Paper & Plastic</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Pasta, Grains & Rice</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Health & Pharmacy</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Pet Products</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Refrigerated</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Seasonal, Toys & Novelty</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Seasoning</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light  pl-3 mb-2 hov"><v-icon color="grey" class="pr-2">list</v-icon>Fast Food</v-list-tile-title>
                            </v-list-tile-content>
                                </v-flex>
                                <v-flex xs6>
                            <v-list-tile-content>      
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Services</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Tobacco Products</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Juices, Jams & Peanut Butter</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Baking Needs</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>School Supplies</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Pet Food</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Alcoholic Beverages</v-list-tile-title>
                                <v-list-tile-title class="subheading font-weight-light hov pl-3 mb-2"><v-icon color="grey" class="pr-2">list</v-icon>Snacks</v-list-tile-title>            
                            </v-list-tile-content>
                                </v-flex>
                            </v-layout>
                        </v-list>
                    </v-menu>  
                </div>
            </div>
                <div class="hidden-sm-and-down mx-3 body-2 text-uppercase">
                <div>
                    <router-link to="/shopping_history"  class="white--text" style="text-decoration:none">
                        <span>
                            Shopping History
                        </span>
                    </router-link>
                </div>
            </div>

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
            <div class="title ml-3 mb-2">Tickky Box</div>
            <v-list-tile v-for="(menu, i) in menus" :key="i" :to="menu.route">
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{menu.title}}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="">
                <v-list-tile-content>
                    <v-list-tile-title>
                       Categories  
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
             <v-list-tile to="shopping_history">
                <v-list-tile-content>
                    <v-list-tile-title>
                        Shopping History    
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
        </v-list>
        </v-navigation-drawer>
        <!-- <app-drawer></app-drawer> -->
    </div>
</template>
<script>
// import Drawer from '@/components/Drawer.vue';
export default {
    // components:{
    //     'app-drawer' : Drawer
    // },
    data(){
        return{
            drawer:false,
            add:true,
            remove:false,
            products: [
                { title: 'Product List', route: '/products'},
                { title: 'Add New Product', route: '/add_product'}
            ],
            menus:[
                {title:  'Home', route:'/'},
                {title:  'View Site Coupon', route:'/site_coupon'},
                {title:  'Store', route:'/site_stores'},
                {title:  'Blog', route:'/blog'}
            ]        
        }
    }
}
</script>
<style>
.v-list__tile:hover{cursor:pointer;background-color: rgba(239, 241, 239, 1);}
.v-list__tile__title{color:black;}
.ib:focus{border:white;}


/* new css */
.hov:hover{
    color:green;
    cursor:pointer;
    font-weight:bold;
}

</style>

