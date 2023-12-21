<script>
import { useUsersStore } from '../stores/users'

export default {
    props: [
        'item',
        'hide'
    ],
    data(){
        return{
            userStore: useUsersStore()
        }
    },
    computed: {
        totalPrice(){
            return this.item.price * this.item.amount
        },
        totalBtw(){
            return this.totalPrice + this.totalPrice * 0.21
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
            <h3>{{ item.titel }} x {{ item.amount }}</h3>
            <p>{{ item.description }}</p>
            <div class="itemEdit" :class="hide">
                <div class="itemEditAmount">
                    <input type="number" id="amount" name="quantity" min="1" :max="item.stock" v-model="item.amount">
                </div>
                <button class="itemRemove" @click="removeItem(item.id)">Remove</button>
            </div>
        </div>
        <div>
            <p>€ {{ totalPrice }}</p>
            <p>inc Btw € {{ totalBtw }}</p>
        </div>
    </div>
</template>

<style lang="">
    
</style>