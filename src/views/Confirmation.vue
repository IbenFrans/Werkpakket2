<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FormComponent from '@/components/FormComponent.vue'
import { useUsersStore } from '../stores/users';
import CartComponent from '../components/CartComponent.vue';

export default {
    data(){
        return{
            headerText: "Payment succesful",
            subText: "Enjoy your goodies!",
            userStore: useUsersStore(),
            checkedForm: false,
            hide: "hide",
            checkout: "checkout",
            buttonBackToProducts: "Back to Products",
            pTotalPrice: "Totaalprijs: € ",
            pTotalBtw: "Totaalprijs (inc Btw): € ",
        }
    },
    components:{
        HeaderComponent,
        CartComponent,
        FormComponent
    },
    computed:{
        getShoppingCart(){
            return this.userStore.confirmationOverview
        },
        getTotalPrice(){
            return this.userStore.confirmationTotal
        },
        getTotalBtw(){
            return this.userStore.confirmationTotalBtw
        },
    },
    methods:{
        backToProducts(){
            this.$router.push("Products")
        }
    }
    
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="subText"></HeaderComponent>
    <div class="shoppingCart" v-if="this.getShoppingCart.length !== 0">
    <CartComponent 
            v-for="item in this.getShoppingCart" 
            v-bind:id="item.id"
            v-bind:item="item"
            v-bind:hide="hide"
            v-bind:checkout="checkout">
        </CartComponent>
        <div class="Totaalprijs">
            <p>{{ pTotalPrice}}{{ getTotalPrice }}</p>
            <p>{{ pTotalBtw }}{{ getTotalBtw }}</p>
        </div>
    </div>
    <button class="shoppingConfirm" @click="backToProducts">{{ buttonBackToProducts }}</button>
</template>
<style lang="">
    
</style>