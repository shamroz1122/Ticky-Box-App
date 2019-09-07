<template>
  <div>
    <app-header></app-header>
    <MerchNavbar></MerchNavbar>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions by Store</div>
                    <pie-chart :data="ConsumerRedemptionbyStore" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions by Categories</div>
                    <pie-chart :data="ConsumerRedemptionByCategory" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Gender</div>
                    <pie-chart :data="ConsumerRedemptionByGender" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Age</div>
                    <pie-chart :data="ConsumerRedemptionByAge" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Income</div>
                    <pie-chart :data="ConsumerRedemptionByIncome" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions by Job</div>
                    <pie-chart :data="ConsumerRedemptionByJob" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Education </div>
                    <pie-chart :data="ConsumerRedemptionByEducation" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions Has Children</div>
                    <pie-chart :data="ConsumerRedemptionByChildren" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Marital Status</div>
                    <pie-chart :data="ConsumerRedemptionByMartialStatus" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Home Ownership Type</div>
                    <pie-chart :data="ConsumerRedemptionHomeOwnership" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By Home Dwelling Type</div>
                    <pie-chart :data="ConsumerRedemptionHomeDewelling" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 class="mt-5">
                <v-card flat>
                <div class="title text-xs-center pt-2">Consumer Redemptions By W/O Pets</div>
                    <pie-chart :data="ConsumerRedemptionByPets" id="myPieCharts"></pie-chart>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import MerchNavbar from '@/components/MerchNavbar.vue'
import PieChart from "../../../PieChart.js";
  export default {
    components:{
        'pie-chart': PieChart,
        'MerchNavbar':MerchNavbar,
    },
    data(){
        return{
        ConsumerRedemptionbyStore: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByCategory: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByGender: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByAge: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByIncome: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByJob: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByEducation: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByChildren: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        }, 
        ConsumerRedemptionByMartialStatus: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionHomeOwnership: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionHomeDewelling: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        },
        ConsumerRedemptionByPets: {
            labels: ["Demo 1", "Demo 2"],
            datasets: [
            {
                label: "Data One",
                backgroundColor: ["#41B883", "#E46651"],
                data: [35000 , 50000]
            }
            ]
        }

    }
  }
}
</script>
