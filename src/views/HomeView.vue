<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import PopularProductsComponent from '@/components/PopularProductsComponent.vue';
import { useProductsStore } from '@/stores/products';

export default {
    data(){
        return{
            productStore: useProductsStore()
        }
    },
    components: {
        PopularProductsComponent,
        HeaderComponent
    },
    computed:{
        popularProducts(){
            const sortedProducts = this.products.sort((a, b) => b.stock - a.stock)
            return sortedProducts.slice(0, 3)
        }
    },
    
}
</script>

<template>
    <main>
        <header class="headerCenter">
            <h1>Shneaky Designs!</h1>
            <p>Get some awesome prints for an awesome price!</p>
        </header>
        <div class="carousel">
        <ul class="carouselList">
            <PopularProductsComponent v-for="product in productStore.popularProducts"
            v-bind:key="product.id"
            v-bind:product="product"/>
        </ul>
        </div>
    </main>
</template>

<style lang="">
    
</style>