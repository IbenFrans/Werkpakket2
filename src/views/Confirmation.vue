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
            checkout: "checkout"
        }
    },
    components:{
        HeaderComponent,
        CartComponent,
        FormComponent
    },
    computed:{
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
        backToProducts(){
            this.$router.push("Products")
        }
    }
    
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="subText"></HeaderComponent>
    <div class="shoppingCart" v-if="this.userStore.confirmationOverview.length !== 0">
    <CartComponent 
            v-for="item in this.userStore.confirmationOverview" 
            v-bind:id="item.id"
            v-bind:item="item"
            v-bind:hide="hide"
            v-bind:checkout="checkout">
        </CartComponent>
        <div class="Totaalprijs">
            <p>Totaalprijs: € {{ getTotalPrice }}</p>
            <p>Totaalprijs (inc Btw): € {{ getTotalBtw }}</p>
        </div>
    </div>
    <button class="shoppingConfirm" @click="backToProducts">Back to Products</button>
</template>
<style lang="">
    
</style>