<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import { useUsersStore } from '@/stores/users';

export default {
    data(){
        return{
            headerText: "Shopping Cart",
            headerSubText: "All your goodies are here!",
            userStore: useUsersStore(),
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
        getShoppingCart(){
            return this.userStore.shoppingCart
        },
        getTotalPrice(){
            return this.userStore.totalPrice
        },
        getTotalBtw(){
            return this.userStore.totalBtw
        }
        
    }
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="headerSubText"/>
    <div class="shoppingCart">
        <CartComponent v-for="item in this.getShoppingCart" 
        v-bind:id="item.id"
        v-bind:item="item">
    </CartComponent>
    <p>Totaalprijs: € {{ getTotalPrice }}</p>
    <p>Totaalprijs (inc Btw): € {{ getTotalBtw }}</p>
    </div>
</template>

<style lang="">
    
</style>