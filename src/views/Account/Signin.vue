<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <v-container> 
            <v-layout row wrap justify-space-between="">
                <v-flex xs12 sm12>
                    <h1>Sign in</h1>
                </v-flex>
                <v-flex xs12 sm8>
                    <v-form>
                        <v-text-field label='Email' v-model="email" type="email">
                        </v-text-field>
                        <v-text-field label='Password' v-model="password" type="password">
                        </v-text-field>
                        <v-btn round color="success" :to="{ name: 'consumerdashboard', params: {} }" dark>Sign in</v-btn>
                    </v-form>
                </v-flex>
                <v-flex xs12 sm3>
                    <h3>Sign in with social media</h3>
                    <v-btn block color="light-blue darken-4" dark>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE0MC4yLDcyaC0yOC4ydi0xNmMwLC04LjI1NiAwLjY3MiwtMTMuNDU2IDEyLjUwNCwtMTMuNDU2aDE0Ljk0NHYtMjUuNDRjLTcuMjcyLC0wLjc1MiAtMTQuNTg0LC0xLjEyIC0yMS45MDQsLTEuMTA0Yy0yMS43MDQsMCAtMzcuNTQ0LDEzLjI1NiAtMzcuNTQ0LDM3LjU5MnYxOC40MDhoLTI0djMybDI0LC0wLjAwOHY3Mi4wMDhoMzJ2LTcyLjAyNGwyNC41MjgsLTAuMDA4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+">
                        sign in Facebook
                    </v-btn>
                    <v-btn block color="red darken-3" dark>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwMC4zNiw4MS45MTJ2MzAuNTY4aDQzLjU2Yy01LjY5NiwxOC41MiAtMjEuMTc2LDMxLjc3NiAtNDMuNTYsMzEuNzc2Yy0yNi42NTYsMCAtNDguMjY0LC0yMS42MDggLTQ4LjI2NCwtNDguMjU2YzAsLTI2LjY0OCAyMS42MDgsLTQ4LjI1NiA0OC4yNjQsLTQ4LjI1NmMxMS45ODQsMCAyMi45MjgsNC4zOTIgMzEuMzY4LDExLjYyNGwyMi41MTIsLTIyLjUxMmMtMTQuMjE2LC0xMi45NTIgLTMzLjEyOCwtMjAuODU2IC01My44OCwtMjAuODU2Yy00NC4xOTIsMCAtODAuMDE2LDM1LjgxNiAtODAuMDE2LDgwYzAsNDQuMTg0IDM1LjgyNCw4MCA4MC4wMTYsODBjNjcuMTY4LDAgODEuOTkyLC02Mi44IDc1LjQwOCwtOTMuOTg0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+">
                        sign in Google
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:''
        }
    }
}
</script>
