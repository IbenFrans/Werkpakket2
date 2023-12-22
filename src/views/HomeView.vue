<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { useProductsStore } from '@/stores/products';
import ProductCardComponent from '@/components/ProductCardComponent.vue';

export default {
    data(){
        return{
            productStore: useProductsStore(),
            headerText: "Shneaky Designs!",
            subText: "Get some awesome prints for an awesome price!",
        }
    },
    components: {
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
        <HeaderComponent :title="headerText" :subtext="subText"></HeaderComponent>
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