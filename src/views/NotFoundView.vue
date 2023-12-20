<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    data(){
        return{
            headerText: "Oops!",
            subText: "This page does not seem to exist ¯\\_(ツ)_/¯",
        }
    },
    components:{
        HeaderComponent
    }
    
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="subText"/>
</template>

<style lang="">
    
</style>