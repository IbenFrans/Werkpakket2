import { defineStore } from "pinia"
import usersJson from '/src/data/users.json'

export const useUsersStore = defineStore('users',{
    state: () => ({
       users: usersJson,
       loggedIn: {}
    }),
    getters:{
        shoppingCart(){
            return this.loggedIn.cart;
        }
    },
    actions:{
        changeItemAmount(id, amount){
            this.loggedIn.cart.find(item => item.id === id).amount = amount;
        },
        removeItem(id){
            this.loggedIn.cart.splice(id, 1);
            console.log(this.loggedIn.cart)
        }
    }

})