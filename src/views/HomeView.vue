<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import PopularProductsComponent from '@/components/PopularProductsComponent.vue';
import { useProductsStore } from '@/stores/products';
import ProductCardComponent from '@/components/ProductCardComponent.vue';

export default {
    data(){
        return{
            productStore: useProductsStore()
        }
    },
    components: {
        PopularProductsComponent,
        ProductCardComponent,
        HeaderComponent
    },
    computed:{
        popularProducts(){
            const sortedProducts = this.products.sort((a, b) => b.stock - a.stock)
            return sortedProducts.slice(0, 3)
        },
        
    },
    methods:{
        goToDetailPage(id){
            this.productStore.selectedProduct = id;
            this.$router.push('ProductDetail');
        }
    }
    
}
</script>

<template>
        <header class="headerCenter">
            <h1>Shneaky Designs!</h1>
            <p>Get some awesome prints for an awesome price!</p>
        </header>
        <div class="carousel">
        <ul id="producttiles">
        <ProductCardComponent v-for="product in productStore.popularProducts"
        @click="goToDetailPage(product.id)" 
        v-bind:key="product.id"
        v-bind:product="product">
      </ProductCardComponent>
        </ul>
        </div>
</template>

<style lang="">
    
</style>