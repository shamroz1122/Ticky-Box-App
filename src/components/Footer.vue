<template>
    <v-container fluid blue-grey darken-3 >
        <v-container grid-list-md>
        <v-layout row wrap  white--text app inset >
            <v-flex xs6 sm4 md4 >
                <h2>General</h2>
                <v-layout row wrap>
                    <v-list class="blue-grey darken-3 white--text">
                            <v-list-tile v-for="(general , index) in f_generals" :key="index" :to="general.route" style=" margin-top:-7%; margin-left:-5%;">
                                <v-list-tile-content>
                                    <v-list-tile-title style="color:white;">
                                        {{general.item}}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                     </v-list>
                </v-layout>
            </v-flex>

            <v-flex xs6 sm4 md4 >
                <h2>About US</h2>
                <v-list class="blue-grey darken-3 white--text">
                        <v-list-tile v-for="(general , index) in f_about" :key="index" :to="general.route" style=" margin-top:-4%;  margin-left:-3%;">
                            <v-list-tile-content>
                                <v-list-tile-title style="color:white">
                                    {{general.item}}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
            </v-flex>

            <v-flex xs6 sm4 md4 >
                <h2>Connect</h2>
                <v-list class="blue-grey darken-3 white--text">
                        <v-list-tile v-for="(general , index) in f_connets" :key="index" :to="general.route" style=" margin-top:-4%;  margin-left:-3%;">
                            <v-list-tile-content>
                                <v-list-tile-title style="color:white">
                                    {{general.item}}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
            </v-flex>
        </v-layout>
        </v-container>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            f_generals:
            [
                // {item:'My Account', route:'/'},
                {item:'Coupon Categories', route:'/'},
                {item:'Blog', route:'/'},
                {item:'FAQS', route:'/faqs'},
                {item:'Terms & Conditions', route:'/terms_and_conditions'},
                {item:'Privacy Policy', route:'/privacy_policy'}
            ],
            f_about:
            [
                {item:'About Us', route:'/about'},
                {item:'Patner With Us', route:'/'},
                {item:'Customer Suppport', route:'/customer_support'}
            ],
            f_connets:
            [
                {item:'Facebook', route:'/'},
                {item:'Twitter', route:'/'},
                {item:'Instagram', route:'/'}
            ]
        }
    }
}
</script>


