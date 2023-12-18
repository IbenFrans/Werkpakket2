<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import {useProductsStore }from '@/stores/products.js'

export default {
    data(){
        return{
          store: useProductsStore(),        
          itemsPerPage: 9,
            currentPage: 1,
            currentFilter: "all",
            filters: [
                "all",
                "digital",
                "painting",
                "graphic art"
            ],
        }
    },
    computed: {
        filteredProducts(){
            if (this.currentFilter == "all"){
                return this.store.products;
            } else{
                return this.store.products.filter(product => product.tags.includes(this.currentFilter));
            }
        },
        paginatedProducts(){
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredProducts.slice(startIndex, endIndex);
        },
        totalPages(){
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
        },
    },
    components: {
        ProductCardComponent
    },
    methods: {
        nextPage(){
            if (this.currentPage < this.totalPages){
                this.currentPage++;
            }
        },
        previousPage(){
            if (this.currentPage > 1){
                this.currentPage--;
            }
        },
        goToPage(page){
            this.currentPage = page;
        },
        filter(tag){
            this.currentFilter = tag;
            this.currentPage = 1;
        },
        goToDetailPage(id){
            this.store.selectedProduct = id;
            this.$router.push('ProductDetail');
        }
    }
    
}
</script>
<template lang="">
    <main>
    <header class="headerCenter">
        <h1>Products!</h1>
        <p>Get your shneak on with these designs!</p>
    </header>
    <div class="filter">
        <button v-for="filterTag in this.filters" @click="filter(filterTag)" :class="{ 'selected': filterTag === currentFilter }">{{ filterTag[0].toUpperCase() + filterTag.slice(1) }}</button>
    </div>
    <ul id="producttiles">
        <ProductCardComponent v-for="product in paginatedProducts"
        @click="goToDetailPage(product.id)" 
        v-bind:key="product.id"
        v-bind:product="product">
      </ProductCardComponent>
    </ul>
    <div class="pagination">
        <button @click="previousPage" v-if="currentPage !== 1">&lt;</button>
        <ul>
            <li v-for="page in this.totalPages"><button @click="goToPage(page)" :class="{ 'selected': page === currentPage }"> {{ page }}</button></li>
        </ul>
        <button @click="nextPage" v-if="currentPage !== totalPages">></button>
    </div>
</main>
</template>
<style lang="">
    
</style>