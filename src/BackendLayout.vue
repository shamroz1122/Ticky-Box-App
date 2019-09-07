<template>
  <v-app>
    <Header />
    <Drawer />
    <div class="blue-grey lighten-5">
      <v-container>
          <v-content style="margin-top:20px;">
            <router-view />
          </v-content>
      </v-container>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'
export default {
  data(){
      return{
        mt60: 'margin-top: -30px;'
      }
  },
  components:{
    Footer,
    Header,
    Drawer
    }
}
</script>
<style>
  .mt--30{margin-top: -30px;}
  .mb--30{margin-bottom: -30px;}
  .my--40{
    margin-top: -40px;
    margin-bottom: -40px;
  }
  /* #as{margin-top: -60px;} */
  .mt--60{margin-top: -60px;}
</style>
