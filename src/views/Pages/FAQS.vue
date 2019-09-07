<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <v-container>
        <h1>Frequently Ask Questions</h1>
        <template>
            <v-expansion-panel>
                <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                <div slot="header">Question</div>
                <v-card>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </template>
    </v-container>
    </div>
</template>
