import { defineStore } from "pinia"
import usersJson from '/src/data/users.json'

export const useUsersStore = defineStore('users',{
    state: () => ({
       users: usersJson,
    //    loggedIn: ""
    }),
    getters:{
        shoppingCart(){
            return this.loggedIn.cart;
        },
        // Testing login
        loggedIn(){
            return this.users[0]
        },
        totalPrice(){
            let totaal = 0
            this.shoppingCart.forEach(item => {
                let totaalItem = item.amount * item.price
                totaal += totaalItem
            });
            return totaal
        },
        totalBtw(){
            return this.totalPrice + this.totalPrice * 0.21
        }
    },
    actions:{
        findItem(id){
            return this.loggedIn.cart.find(item => item.id == id)
        },
        changeItemAmount(item, amount){
            this.findItem(item.id).amount = amount;
        },
        addItem(product, amount){
            let productInCart = this.findItem(product.id)
            if (productInCart){
                this.findItem(product.id).amount = amount
            } else{
                product.amount = amount
                this.loggedIn.cart.push(product)
            }
            
        },
        removeItem(id){
            let index = this.findItem(id);
            this.loggedIn.cart.splice(index, 1);
            console.log(this.loggedIn.cart)
        },
    }

})