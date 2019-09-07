<template>
    <div>
        <app-header></app-header>
        <MerchNavbar></MerchNavbar>
        <madmin-content></madmin-content>
        <br>
        <br>
    </div>
</template>
<script>
// import AdminNav from '@/components/AdminNav.vue'
import MerchNavbar from '@/components/MerchNavbar.vue'
import MAdminContent from '@/components/MAdminContent.vue'
export default {
    components:{
        // 'admin-nav':AdminNav,
        'MerchNavbar':MerchNavbar,
        'madmin-content':MAdminContent
    }  
}
</script>

