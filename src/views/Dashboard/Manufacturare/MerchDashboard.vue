<template>
    <div>
        <app-header></app-header>
        <app-drawer></app-drawer>
        <madmin-content></madmin-content>
        <br>
        <br>
    </div>
</template>
<script>
import AdminNav from '@/components/AdminNav.vue'
import MAdminContent from '@/components/MAdminContent.vue'
export default {
    components:{
        'admin-nav':AdminNav,
        'madmin-content':MAdminContent
    }  
}
</script>

