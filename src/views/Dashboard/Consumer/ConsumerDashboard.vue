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
                <v-layout row wrap justify-center>
                    
                    <v-flex lg5>
                        <v-flex xs12><p class="title ">Consumer Profile</p></v-flex>
                        <v-flex sm12 xs12 lg12>
                            <v-layout row wrap>
                                <v-flex xs5   >
                                    <v-text-field label='First name' v-model="fname">
                                    </v-text-field> 
                                </v-flex>
                                <v-flex xs6 offset-xs1>
                                    <v-text-field label='Last name' v-model="lname">
                                    </v-text-field> 
                                </v-flex>
                            </v-layout>
                                <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="date"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="date"
                                    label="Date of birth"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>

                             <v-select
                                :items="genders"
                                v-model="gender"
                                label="Select gender"
                            ></v-select>
                            <v-text-field label='Password' type="password" v-model="password">
                            </v-text-field>
                            <v-text-field label='Cellphone Number' type="phone" v-model="phone">
                            </v-text-field>
                            
                             <v-select
                                :items="mtstatus"
                                v-model="mtstatus"
                                label="Material Status"
                            ></v-select>

                            <v-select
                                :items="hdtypes"
                                v-model="hdtype"
                                label="Home Dwelling Type"
                            ></v-select>
                            <v-select
                                :items="hotypes"
                                v-model="hotype"
                                label="Home Ownership Type"
                            ></v-select>
                            <v-select
                                :items="emstatus"
                                v-model="statusem"
                                label="Employment Status"
                            ></v-select>
                            <v-select
                                :items="childrn"
                                v-model="childrn"
                                label="Has Children?"
                            ></v-select>
                            <v-select
                                :items="pets"
                                v-model="pets"
                                label="Has Pets?"
                            ></v-select>

                            <v-text-field label='Job Industry' v-model="jobind">
                            </v-text-field>  
                        </v-flex>
                        <v-flex xs12 lg12>
                            <v-checkbox v-model="agree" label="I agree the Term of use and Privacy Statment" ></v-checkbox>
                            <v-layout row wrap>
                                <v-flex xs12 sm5 lg12>
                                    <v-btn color="success" block>Submit</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
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
            pets:['Yes', 'No'],
            childrn:['Yes', 'No'],
            mtstatus:['Married','Unmarried'],
            genders:['Male','Female'],
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
