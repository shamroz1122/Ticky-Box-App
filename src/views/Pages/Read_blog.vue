<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <v-container>
            <h1>Blog Detail</h1>
            <v-layout row wrap >
                <v-flex xs12>
                    <v-card class="mr-3 pa-3 mb-5">
                        <p class="title">{{title}}</p>
                        <p class="subtitle text-xs-justify">{{content}} 
                            <router-link to="/blog" style="text-decoration:none">
                                <v-btn raised class="right" color="success" small>Back</v-btn>
                            </router-link>
                        </p>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            title: 'Blog Title',
            content: '',
            count: 0
        }
    },
    methods:{
        increment(){
            return this.count+=1;
        }
    },
    created(){
        this.id;
        this.content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

    }
}
</script>
