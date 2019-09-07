<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <v-container>
        <h1>Customer Support</h1>
        <v-text-field  label="Name" v-model="value" outline></v-text-field>
        <v-text-field  label="Email" v-model="value" outline></v-text-field>
        <v-text-field
            label="Please type your message here.."
            name="name"
            textarea
            outline
        ></v-text-field>
        <v-btn  color="success" large>Submit</v-btn>
        </v-container>
    </div>
</template>