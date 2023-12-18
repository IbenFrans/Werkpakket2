import { defineStore } from "pinia"
import productsJson from '/src/data/products.json'

export const useProductsStore = defineStore('products',{
    state: () => ({
        products: productsJson,
        selectedProduct: 0
    }),
    getters:{
      popularProducts(){
        const sortedProducts = this.products.sort((a, b) => b.stock - a.stock)
        return sortedProducts.slice(0, 3)
    }
    },
    actions: {
      findProduct(id){
        return this.products.find(product => product.id === id);
      },
      changeStock(id, amount){
        this.products.find(product => product.id === id).stock = amount;
      }
    }

})