<script>
import { useProductsStore } from '@/stores/products';
import { useUsersStore } from '../stores/users';
export default {
    data(){
        return{
        productPage: {path:"/Products", name: "Back"},
        productStore: useProductsStore(),
        userStore: useUsersStore(),
        amount: 1,
        productAdded: "",
        backButton: "< Back",
        addButton: "Add to shoppingcart",
        loginButton: "Login to add to cart",
        outOfStockText: "Out of stock"
        }
    },
    computed: {
        product(){
            const notEmpty = this.productStore.selectedProduct
            if (!notEmpty){
                return this.productStore.findProduct(1)
            } else {
                return this.productStore.findProduct(this.productStore.selectedProduct)
            }
            
        },
    },
    methods: {
        goToProducts(){
            this.$router.push("Products")
        },
        goToLogin(){
            this.$router.push("Login")
        },
        addItem(product, amount){
            this.userStore.addItem(product, amount)
            this.productAdded = "You added " + amount + " " + product.titel
        }
    }
}
</script>
<template lang="">
        <button class="backButton" @click="goToProducts">{{ backButton }}</button>
        <div class="product" v-if="product">
            <img :src="product.image" :alt="product.altImage"/>
            <div class="productDetails">
                <div class="productDescription">
                    <h1>{{ product.titel }}</h1>
                    <p>{{ product.description }}</p>
                    <p>{{ product.longDescription }}</p>
                    <ul>
                        <li class="tags" v-for="tag in product.tags">{{ tag}} </li>
                    </ul>
                </div>

                <p v-if="productAdded">{{ productAdded }}</p>
                <div class="productPrijsCart">
                    <div v-if="this.userStore.loggedIn">
                    <p id="prijs">€ {{ product.price}}</p>
                    <input v-if="product.stock != 0" type="number" id="amount" name="quantity" min="1" :max="product.stock" v-model="amount">
                    <button v-if="product.stock != 0" @click="addItem(product, amount)">
                        <svg id="Laag_2" data-name="Laag 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 209.28 180.62">
                        <g id="Laag_1-2" data-name="Laag 1">
                        <path d="m11.59,0c12.76.22,25.51.44,38.27.66.78.09,5.44.71,8.58,4.95,2.99,4.03,2.43,8.4,2.31,9.24,46.19-.22,92.37-.44,138.56-.66,1.95.65,4.78,1.94,6.93,4.62,3.86,4.8,3.15,11.12,2.64,15.18-3.15,24.96-4.72,37.44-10.56,44.87-3.07,3.9-9.69,11.05-21.77,15.83-34.31.22-68.62.44-102.93.66.77,4.84,1.54,9.68,2.31,14.52,33.98.11,67.96.22,101.94.33,5.81,1.59,10.03,6.51,10.56,12.21.61,6.56-3.79,12.93-10.56,14.85-34.31-.11-68.62-.22-102.93-.33-3.42-.04-14.78,1.35-17.15-5.61S30.51,51.24,22.15,27.71c-1.23.46-6.92,2.44-12.87-.33C4.6,25.2-.54,19.93.05,12.87.56,6.72,5.23,1.45,11.59,0Z"/>
                        <circle cx="84.22" cy="163.05" r="17.57"/>
                        <circle cx="162.4" cy="163.05" r="17.57"/>
                        </g>
                        </svg>{{ addButton }}
                    </button>
                    </div>
                    <div v-else>
                        <button @click="goToLogin">{{ loginButton }}</button>
                    </div>
                    <h3 v-if="product.stock == 0">{{ outOfStockText }}</h3>
                </div>
            </div>
        </div>
        <p v-else="goToProducts"></p>
</template>

<style lang="">
    
</style>