<template>
    <div>
        <v-container grid-list-lg>
            <v-layout>
                
            </v-layout>
        </v-container>

        <!-- Old code -->
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 sm6 md6 mb-3>
                    <sale-chart></sale-chart>
                </v-flex>
                <v-flex xs12 sm6 md6 mb-3>
                    <income-chart></income-chart>
                </v-flex>
                
                <v-flex xs12 sm12 mb-3> 
                <v-card>
                    <maanage-request></maanage-request>
                    
                </v-card>       
                </v-flex>
                <v-flex xs12 sm4 md4 mb-3>
                    <v-card class="card-radius green--text">
                        <v-card-text class="text-xs-center title">
                            <v-icon large color="green">person</v-icon>
                        </v-card-text>
                        <v-card-text class="text-xs-center display-2 font-weight-medium black--text">
                            50
                        </v-card-text>
                        <v-card-text class="text-xs-center title">
                            No. of Customers
                        </v-card-text>              
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4 mb-3>
                    <v-card class="card-radius green--text">
                        <v-card-text class="text-xs-center title">
                            <v-icon large color="green">person</v-icon>
                        </v-card-text>
                         <v-card-text class="display-2 text-xs-center  font-weight-medium black--text">
                            30
                        </v-card-text>
                        <v-card-text class="text-xs-center title">
                            No. of Merchant
                        </v-card-text>         
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4 mb-3>
                    <v-card class="card-radius green--text">
                        <v-card-text class="text-xs-center title">
                            <v-icon large color="green" >person</v-icon>
                        </v-card-text>
                         <v-card-text class="display-2 text-xs-center  font-weight-medium black--text">
                            60
                        </v-card-text>
                        <v-card-text class="text-xs-center title">
                            No. of Manufacturer
                        </v-card-text>
                       
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4 mb-3>
                    <v-card class="card-radius">
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-card-text class="text-xs-center title green--text">
                                    Coupons
                                </v-card-text>
                            </v-flex>
                            <v-flex xs6>
                                <v-card-text class="text-xs-center title mb-1 green--text">
                                    Active
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-text class="text-xs-center title red--text">
                                    Expire
                                </v-card-text>
                            </v-flex>
                            <v-flex xs6>
                                <v-card-text class="text-xs-center title  mb-1">
                                    100
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-text class="text-xs-center title">
                                    69
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import SalesChart from '../components/charts/SalesChart.vue'
import IncomeChart from '../components/charts/IncomeChart.vue'
import Manage_Requests from '../components/Manage_Requests.vue'
export default {
    components:{
        'sale-chart':SalesChart,
        'income-chart':IncomeChart,
        'maanage-request':Manage_Requests
    }
}
</script>

<style>
    .card-radius{border-radius:20px;}
</style>
