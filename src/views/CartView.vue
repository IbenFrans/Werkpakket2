<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import { useUsersStore } from '@/stores/users';

export default {
    data(){
        return{
            headerText: "Shopping Cart",
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
        },
        getSubText(){
            if (this.getShoppingCart == 0){
                return "Oops, seems a bit empty here!"
            } else {
                return "All your goodies are here!"
            }
        }
        
    }
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="getSubText"/>
        <div class="shoppingCart" v-if="getShoppingCart.length !== 0">
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