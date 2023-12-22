<script>
import { useUsersStore } from '../stores/users';
export default {
    data(){
        return{
            userStore: useUsersStore(),
        }
    },
    computed:{
        shoppingCartSize(){
            return this.userStore.shoppingCart.length
        },
        cartText(){
            return "Cart (" + this.shoppingCartSize + ")"
        }
    },
    methods:{
        goToCart(){
            this.$router.push("Cart")
        }
    }
        
}
</script>
<template lang="">
    <p class="activeCart" @click="goToCart">{{ cartText }}</p>
</template>
<style lang="">
    
</style>