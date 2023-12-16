import { defineStore } from "pinia"

export const useProductsStore = defineStore['products',{
    state: () => ({
        products: fetchProducts()
    }),
    actions: {
        async fetchProducts() {
            try {
              const response = await fetch('@/products.json'); // Replace with the correct path if it's in a different location
              if (!response.ok) {
                throw new Error('Failed to fetch products');
              }
              const data = await response.json();
              this.setProducts(data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          },
          setProducts(products) {
            this.products = products;
          }
    }

}]