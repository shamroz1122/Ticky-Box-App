<template>
<div>
    <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
        <v-layout row wrap justify-space-between>
            <v-flex xs12 sm12>
                <h1>Sign up</h1>
            </v-flex>
            <v-flex xs12 sm8 >
                <v-form>
                    <v-layout row wrap justify-space-between>
                        <v-flex sm5 xs12>
                            <v-text-field label='First name' v-model="fname">
                            </v-text-field> 
                            <v-text-field label='Email' v-model="email" type="email">
                            </v-text-field>
                            <v-select
                                :items="genders"
                                v-model="gender"
                                label="Select gender"
                            ></v-select>
                            <v-text-field label='Password' type="password" v-model="password">
                            </v-text-field>
                            <v-text-field label='Phone' type="number" v-model="phone">
                            </v-text-field>
                        <!-- </v-form>    -->
                        </v-flex>
                        <v-flex sm5 xs12>
                            <!-- <v-form> -->
                            <v-text-field label='Last name' v-model="lname">
                            </v-text-field> 
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
                                min-width="290px"
                            
                            >
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
                                :items="types"
                                v-model="type"
                                label="Select type"
                            ></v-select>
                            <v-text-field label='Confirm password' type="password" v-model="cpassword">
                            </v-text-field> 
                            <!-- <v-text-field type="file" v-model="image">
                            </v-text-field>     -->
                        </v-flex>
                        <v-flex xs12>
                            <!-- <v-checkbox v-model="agree" label="I agree the Term of use and Privacy Statment" ></v-checkbox> -->
                            <v-layout row wrap>
                                <v-flex xs1>
                                    <v-checkbox></v-checkbox>
                                </v-flex>
                                <v-flex xs10 class="mt-4">
                                    I agree the 
                                    <router-link to='/terms_and_conditions' style="text-decoration:none;">  
                                        Term 
                                    </router-link>
                                     of use and 
                                    <router-link to='/privacy_policy' style="text-decoration:none;">  
                                        Privacy Statment 
                                    </router-link>
                                    
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm5>
                                    <v-btn color="success" block>Sign up</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-form>
                
            </v-flex>
            <v-flex xs12 sm3>
                <h3>Sign up with social media</h3>
                <v-btn block color="light-blue darken-4" dark>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE0MC4yLDcyaC0yOC4ydi0xNmMwLC04LjI1NiAwLjY3MiwtMTMuNDU2IDEyLjUwNCwtMTMuNDU2aDE0Ljk0NHYtMjUuNDRjLTcuMjcyLC0wLjc1MiAtMTQuNTg0LC0xLjEyIC0yMS45MDQsLTEuMTA0Yy0yMS43MDQsMCAtMzcuNTQ0LDEzLjI1NiAtMzcuNTQ0LDM3LjU5MnYxOC40MDhoLTI0djMybDI0LC0wLjAwOHY3Mi4wMDhoMzJ2LTcyLjAyNGwyNC41MjgsLTAuMDA4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+">
                    sign up Facebook
                </v-btn>
                <v-btn block color="red darken-3" dark>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwMC4zNiw4MS45MTJ2MzAuNTY4aDQzLjU2Yy01LjY5NiwxOC41MiAtMjEuMTc2LDMxLjc3NiAtNDMuNTYsMzEuNzc2Yy0yNi42NTYsMCAtNDguMjY0LC0yMS42MDggLTQ4LjI2NCwtNDguMjU2YzAsLTI2LjY0OCAyMS42MDgsLTQ4LjI1NiA0OC4yNjQsLTQ4LjI1NmMxMS45ODQsMCAyMi45MjgsNC4zOTIgMzEuMzY4LDExLjYyNGwyMi41MTIsLTIyLjUxMmMtMTQuMjE2LC0xMi45NTIgLTMzLjEyOCwtMjAuODU2IC01My44OCwtMjAuODU2Yy00NC4xOTIsMCAtODAuMDE2LDM1LjgxNiAtODAuMDE2LDgwYzAsNDQuMTg0IDM1LjgyNCw4MCA4MC4wMTYsODBjNjcuMTY4LDAgODEuOTkyLC02Mi44IDc1LjQwOCwtOTMuOTg0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+">
                    sign up Google
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
  export default {
    data: () => ({
    date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      genders: ['Male', 'Female'],
      types: ['Consumer','Manufacturer', 'Merchant'],
      age:''
    })
  }
</script>
