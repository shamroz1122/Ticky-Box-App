<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <v-container>
            <h1>Blogs Detail</h1>
            <v-layout row wrap >
                <v-flex xs12 sm6 md4 lg4 v-for="(blog, n) in blogs" :key="n">
                    <v-card class="mr-3 pa-3 mb-5">
                        <p class="title">{{blog.title}}</p>
                        <p class="subtitle" >{{blog.content | snippet}} 
                            <router-link :to="'/read_blog/' + blog.id " style="text-decoration:none">
                                <v-btn color="primary" class="right" small>Read more</v-btn>
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
            blogs:[
                {
                    id:1,
                    title: ' Blog Title 1 ',
                    content: 'Lorem Ipsum is simply dummy text of the printing and textLorem Ipsum is simply dummy text of the printing and textLorem Ipsum is simply dummy text of the printing and textLorem Ipsum is simply dummy text of the printing and textLorem Ipsum is simply dummy text of the printing and text ',
                    count: 0
                },
                {
                    id:2,
                    title: ' Blog Title 2',
                    content: 'Lorem Ipsum is simply dummy text of the printing and text',
                    count: 0
                },
                {
                    id:3,
                    title: ' Blog Title 3',
                    content: 'Lorem Ipsum is simply dummy text of the printing and text',
                    count: 0
                }     
            ]
        }
    },
    methods:{
        increment(){
            return this.count+=1;
        }
    },
    filters:{
        snippet(value){
            return value.slice(0,75) + '...';
        }
    }
}
</script>
