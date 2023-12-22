<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FormComponent from '@/components/FormComponent.vue'
import { useUsersStore } from '../stores/users';
import CartComponent from '../components/CartComponent.vue';

export default {
    data(){
        return{
            headerText: "Checkout",
            subText: "Please fill in your information",
            userStore: useUsersStore(),
            user2: {},
            checkedForm: false,
            hide: "hide",
            checkout: "checkout",
            pTotalPrice: "Totaalprijs: € ",
            pTotalBtw: "Totaalprijs (inc Btw): € ",
            labelOtherAdress: "Different shippingadress",
            confirmButton: "Confirm"
        }
    },
    components:{
        HeaderComponent,
        FormComponent,
        CartComponent
        
    },
    computed:{
        user(){
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
        
    },
    methods:{
        goToConfirmation(){
            this.userStore.confirmationOverview = this.user.cart
            this.userStore.confirmationTotal = this.getTotalPrice
            this.userStore.confirmationTotalBtw = this.getTotalBtw
            this.user.cart = []
            this.$router.push("Confirmation")
        }
    }
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="subText"></HeaderComponent>
    <div class="shoppingCart" v-if="getShoppingCart.length !== 0">
    <CartComponent 
            v-for="item in this.getShoppingCart" 
            v-bind:id="item.id"
            v-bind:item="item"
            v-bind:hide="hide"
            v-bind:checkout="checkout">
        </CartComponent>
        <div class="Totaalprijs">
            <p>{{ pTotalPrice }}{{ getTotalPrice }}</p>
            <p>{{ pTotalBtw }}{{ getTotalBtw }}</p>
        </div>
    </div>
    <FormComponent
    v-bind:user="user"
    v-bind:key="user.email">
    </FormComponent>
    <div class="checkBoxDiv">
        <label for="facturatieAdress">{{ labelOtherAdress }}</label>
        <input type="checkbox" v-model="checkedForm">
    </div>
    <FormComponent
    v-if="checkedForm"
    v-bind:user="user2"
    ></FormComponent>
    <button class="shoppingConfirm" @click="goToConfirmation">{{ confirmButton }}</button>
</template>
<style lang="">
    
</style>