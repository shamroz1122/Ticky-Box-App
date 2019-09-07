<template>
    <div>
        <v-container>
            <!-- <v-layout row wrap align-center justify-center>
                <v-flex xs11 sm5 md5 lg4 class="text-xs-center">
                    <router-link to="/">
                        <img src="@/assets/logo.png" height="125px">
                    </router-link>
                </v-flex>
                <v-flex xs11  sm5 md4 lg4 class="text-xs-center">
                    <v-text-field
                        style="margin-top:15px;"
                        flat
                        outline
                        label="Search Products"
                        append-icon="search"
                        >
                    </v-text-field>
                </v-flex>
                <v-flex xs12 sm2 md3 lg4 class="text-xs-center">
                        <router-link to="/signin" style="text-decoration:none;" class="black--text mr-2">
                            <span class="font-weight-bold" mr-3>
                                SIGN IN
                            </span>
                        </router-link>
                        <v-icon color="black">person</v-icon>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }" 
                                >
                                    <v-icon color="black"
                                        dark
                                        flat
                                        v-on="on"
                                    >arrow_drop_down</v-icon>
                                </template>
                                <v-list>
                                    <v-list-tile
                                    to="/signup"
                                    >
                                    <v-list-tile-title>Sign up</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                </v-flex>
            </v-layout> -->
            <v-layout row wrap align-center justify-space-between>
                <v-flex xs12 sm3 class="text-xs-center">
                    <router-link to="/">
                        <img src="@/assets/logo.png" height="125px">
                    </router-link>
                </v-flex>
               <v-flex xs12 sm2 class="text-xs-center">
                        <router-link to="/signin" style="text-decoration:none;" class="black--text mr-2">
                            <span class="font-weight-bold" mr-3>
                                SIGN IN
                            </span>
                        </router-link>
                        <v-icon color="black">person</v-icon>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }" 
                                >
                                    <v-icon color="black"
                                        dark
                                        flat
                                        v-on="on"
                                    >arrow_drop_down</v-icon>
                                </template>
                                <v-list>
                                    <v-list-tile
                                    to="/signup"
                                    >
                                    <v-list-tile-title>Sign up</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                </v-flex> 
            </v-layout>
        </v-container>
    </div>
</template>
<style>
/* myinput:focus{background-color:white!important;color:black!important;} */
</style>
