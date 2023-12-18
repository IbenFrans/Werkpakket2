<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import { useUsersStore } from '@/stores/users';
import { useProductsStore } from '@/stores/products';

export default {
    data(){
        return{
            headerText: "Shopping Cart",
            headerSubText: "All your goodies are here!",
            userStore: useUsersStore(),
            productStore: useProductsStore()
        }
    },
    components:{
        HeaderComponent,
        CartComponent
    },
    computed:{
        currentUser(){
            return this.userStore.loggedIn
        },
        
    }
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="headerSubText"/>
    <div class="shoppingCart">
        <CartComponent v-for="item in userStore.shoppingCart" 
        v-bind:id="item.id"
        v-bind:item="item">
    </CartComponent>

    </div>
</template>

<style lang="">
    
</style>