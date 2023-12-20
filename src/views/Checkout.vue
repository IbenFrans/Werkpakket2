<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FormComponent from '@/components/FormComponent.vue'
import { useUsersStore } from '../stores/users';

export default {
    data(){
        return{
            headerText: "Checkout",
            subText: "Please fill in your information",
            userStore: useUsersStore(),
            user2: {},
            checkedForm: false
        }
    },
    components:{
        HeaderComponent,
        FormComponent
        
    },
    computed:{
        user(){
            return this.userStore.loggedIn
        } 
    }
}
</script>
<template lang="">
    <HeaderComponent :title="headerText" :subtext="subText"></HeaderComponent>
    <FormComponent
    v-bind:user="user"
    v-bind:key="user.email">
    </FormComponent>
    <div class="checkBoxDiv">
        <label for="facturatieAdress">Different shippingadress</label>
        <input type="checkbox" v-model="checkedForm">
    </div>
    <FormComponent
    v-if="checkedForm"
    v-bind:user="user2"
    ></FormComponent>
</template>
<style lang="">
    
</style>