<template>
  <v-app >
    <div class="blue-grey lighten-5">
      <v-content>
        <router-view />
      </v-content>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  data(){
      return{
        mt60: 'margin-top: -30px;'
      }
  },
  components:{
    Footer
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
