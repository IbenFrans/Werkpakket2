<script>
import { useUsersStore } from '../stores/users'

export default {
    props: [
        'item',
        'hide',
        'checkout'
    ],
    data(){
        return{
            userStore: useUsersStore(),
            pTotalPrice: "€ ",
            pTotalBtw: "inc BTW € ",
            removeButton: "Remove"
        }
    },
    computed: {
        totalPrice(){
            return this.item.price * this.item.amount
        },
        totalBtw(){
            return this.totalPrice + this.totalPrice * this.item.btw
        },
        prodcutTitle(){
            return this.item.titel + " x " + this.item.amount
        }
    },
    methods: {
        removeItem(itemId){
            this.userStore.removeItem(itemId)
        },
        changeAmount(item, itemAmount){
            console.log(itemAmount)
            this.userStore.changeItemAmount(item, itemAmount)
        }
    }
}
</script>
<template lang="">
    <div class="cartComponent">
        <div class="imgDiv"> 
            <img :src="item.image" :alt="item.altimage"/>
        </div>
        <div class="itemDescription">
            <h3>{{ prodcutTitle }}</h3>
            <p>{{ item.description }}</p>
            <div class="itemEdit">
                <div class="itemEditAmount" :class="hide">
                    <input type="number" id="amount" name="quantity" min="1" :max="item.stock" v-model="item.amount">
                </div>
                <button :class="hide" class="itemRemove" @click="removeItem(item.id)">{{ removeButton }}</button>
                <div :class="checkout" class="itemPrice">
                    <p>{{ pTotalPrice }}{{ totalPrice }}</p>
                    <p>{{ pTotalBtw  }}{{ totalBtw }}</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="">
    
</style>