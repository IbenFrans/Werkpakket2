import { defineStore } from "pinia"
import usersJson from '/src/data/users.json'

export const useUsersStore = defineStore('users',{
    state: () => ({
       users: usersJson,
       confirmationOverview: [],
       confirmationTotal: 0,
       confirmationTotalBtw: 0,
       loggedIn: ""
    }),
    getters:{
        shoppingCart(){
            if(this.loggedIn === ""){
                return []
            } else {
                return this.loggedIn.cart;
            }
            
        },
        // Testing login
        // loggedIn(){
        //     return this.users[0]
        // },
        totalPrice(){
            let totaal = 0
            this.shoppingCart.forEach(item => {
                let totaalItem = item.amount * item.price
                totaal += totaalItem
            });
            return totaal
        },
        totalBtw(){
            let totaal = 0
            this.shoppingCart.forEach(item => {
                let totaalItem = item.amount * (item.price + (item.price * item.btw))
                totaal += totaalItem
            });
            return totaal
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
            this.loggedIn.cart = this.loggedIn.cart.filter(item => item.id !== id)
        },
    }

})