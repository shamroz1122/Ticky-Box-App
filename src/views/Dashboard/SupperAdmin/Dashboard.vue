<template>
    <div>
        <app-header></app-header>
        <admin-nav></admin-nav>
        <admin-content></admin-content>
        <br>
        <br>
    </div>
</template>
<script>
import AdminNav from '@/components/AdminNav.vue'
import AdminContent from '@/components/AdminContent.vue'
export default {
    components:{
        'admin-nav':AdminNav,
        'admin-content':AdminContent
    }
    
}
</script>

