<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
// import { useProductsStore } from '@/stores/products.js'

export default {
    data(){
        return{
            products: [
      {
        id: 1,
        titel: "Kirby with knife",
        description: "Cute but deadly",
        longDescription: "This absolute gorgeous round pink blob has some murderous tendencies.<br>He may be cute but he'll cut you up like fish.<br>He came to kill people and chew bubblegum and he's all out of bubblegum.<br><br>This piece was made in Illustrator",
        image: "src/assets/kirby.png",
        altImage: "Art kirby with knife",
        price: 50,
        btw: 5,
        stock: 50,
        tags: [
          "cute",
          "deadly",
          "digital"
        ]
      },
      {
        id: 2,
        titel: "Coffee Slayer",
        description: "Defeat the morning!",
        longDescription: "",
        image: "src/assets/coffeeslayer.png",
        altImage: "Art Coffee slayer",
        price: 50,
        btw: 5,
        stock: 50,
        tags: [
          "coffee",
          "deadly",
          "digital"
        ]
      },
      {
        id: 3,
        titel: "Hungry Mimic",
        description: "Not the treasure you want!",
        longDescription: "",
        image: "src/assets/mimic.png",
        altImage: "Art Mimic",
        price: 20,
        btw: 5,
        stock: 50,
        tags: [
          "treasure",
          "deadly",
          "graphic art"
        ]
      },
      {
        id: 4,
        titel: "Skelecat",
        description: "Spooky purrs...",
        longDescription: "",
        image: "src/assets/skelecat.png",
        altImage: "Art Skelecat",
        price: 25,
        btw: 5,
        stock: 50,
        tags: [
          "cute",
          "cat",
          "graphic art"
        ]
      },
      {
        id: 5,
        titel: "Spicy Fishes",
        description: "Smells fishy",
        longDescription: "",
        image: "src/assets/vissen.png",
        altImage: "Art Vissen",
        price: 100,
        btw: 5,
        stock: 50,
        tags: [
          "spicy",
          "fish",
          "digital"
        ]
      },
      {
        id: 6,
        titel: "Shrunkenhead",
        description: "He looks thirsty",
        longDescription: "",
        image: "src/assets/shrunkenhead.png",
        altImage: "Shrunkenhead in jar",
        price: 50,
        btw: 5,
        stock: 50,
        tags: [
          "cute",
          "deadly",
          "digital"
        ]
      },
      {
        id: 7,
        titel: "Moonlit Howl",
        description: "Embrace the night!",
        longDescription: "",
        image: "src/assets/moonlit-howl.png",
        altImage: "Art Moonlit Howl",
        price: 40,
        btw: 5,
        stock: 50,
        tags: [
          "wolf",
          "night",
          "digital"
        ]
      },
      {
        id: 8,
        titel: "Space Oddity",
        description: "Far out in space!",
        longDescription: "",
        image: "src/assets/space-oddity.png",
        altImage: "Art Space Oddity",
        price: 55,
        btw: 5,
        stock: 50,
        tags: [
          "space",
          "astronomy",
          "digital"
        ]
      },
      {
        id: 9,
        titel: "Floral Fantasy",
        description: "Nature's beauty!",
        longDescription: "",
        image: "src/assets/floral-fantasy.png",
        altImage: "Art Floral Fantasy",
        price: 30,
        btw: 5,
        stock: 50,
        tags: [
          "flowers",
          "nature",
          "digital"
        ]
      },
      {
        id: 10,
        titel: "Ninja Penguin",
        description: "Silent and Deadly!",
        longDescription: "",
        image: "src/assets/ninja-penguin.png",
        altImage: "Art Ninja Penguin",
        price: 45,
        btw: 5,
        stock: 50,
        tags: [
          "ninja",
          "penguin",
          "digital"
        ]
      },
      {
        id: 11,
        titel: "Vampire Bat",
        description: "Beware the night!",
        longDescription: "",
        image: "src/assets/vampire-bat.png",
        altImage: "Art Vampire Bat",
        price: 35,
        btw: 5,
        stock: 50,
        tags: [
          "vampire",
          "bat",
          "digital"
        ]
      },
      {
        id: 12,
        titel: "Robot Samurai",
        description: "Technological warrior!",
        longDescription: "",
        image: "src/assets/robot-samurai.png",
        altImage: "Art Robot Samurai",
        price: 60,
        btw: 5,
        stock: 50,
        tags: [
          "robot",
          "samurai",
          "digital"
        ]
      },
      {
        id: 13,
        titel: "Glowing Fairy",
        description: "Magical essence!",
        longDescription: "",
        image: "src/assets/glowing-fairy.png",
        altImage: "Art Glowing Fairy",
        price: 25,
        btw: 5,
        stock: 50,
        tags: [
          "fairy",
          "magical",
          "digital"
        ]
      },
      {
        id: 14,
        titel: "Dragon's Breath",
        description: "Fiery rage!",
        longDescription: "",
        image: "src/assets/dragons-breath.png",
        altImage: "Art Dragon's Breath",
        price: 75,
        btw: 5,
        stock: 50,
        tags: [
          "dragon",
          "fire",
          "digital"
        ]
      },
      {
        id: 15,
        titel: "Forest Guardian",
        description: "Protecting the woods!",
        longDescription: "",
        image: "src/assets/forest-guardian.png",
        altImage: "Art Forest Guardian",
        price: 40,
        btw: 5,
        stock: 50,
        tags: [
          "forest",
          "guardian",
          "digital"
        ]
      },
      {
        id: 16,
        titel: "Golden Phoenix",
        description: "Rising from ashes!",
        longDescription: "",
        image: "src/assets/golden-phoenix.png",
        altImage: "Art Golden Phoenix",
        price: 80,
        btw: 5,
        stock: 50,
        tags: [
          "phoenix",
          "gold",
          "digital"
        ]
      },
      {
        id: 17,
        titel: "Electric Wolf",
        description: "Charged up!",
        longDescription: "",
        image: "src/assets/electric-wolf.png",
        altImage: "Art Electric Wolf",
        price: 55,
        btw: 5,
        stock: 50,
        tags: [
          "electric",
          "wolf",
          "digital"
        ]
      },
      {
        id: 18,
        titel: "Frosty Yeti",
        description: "Chilling presence!",
        longDescription: "",
        image: "src/assets/frosty-yeti.png",
        altImage: "Art Frosty Yeti",
        price: 70,
        btw: 5,
        stock: 50,
        tags: [
          "yeti",
          "ice",
          "digital"
        ]
      },
      {
        id: 19,
        titel: "Mermaid's Song",
        description: "Enchanting melodies!",
        longDescription: "",
        image: "src/assets/mermaids-song.png",
        altImage: "Art Mermaid's Song",
        price: 45,
        btw: 5,
        stock: 50,
        tags: [
          "mermaid",
          "music",
          "digital"
        ]
      },
      {
        id: 20,
        titel: "Potion Master",
        description: "Brewing magic elixirs!",
        longDescription: "",
        image: "src/assets/potion-master.png",
        altImage: "Art Potion Master",
        price: 65,
        btw: 5,
        stock: 50,
        tags: [
          "potion",
          "magic",
          "digital"
        ]
      },
    ],
            itemsPerPage: 9,
            currentPage: 1,
            currentFilter: "all",
            filters: [
                "all",
                "digital",
                "painting",
                "graphic art"
            ]
        }
    },
    computed: {
        filteredProducts(){
            if (this.currentFilter == "all"){
                return this.products;
            } else{
                return this.products.filter(product => product.tags.includes(this.currentFilter));
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
        goToDetailPage(product){
            this.$router.push("ProductDetail")
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
        <ProductCardComponent v-for="product in paginatedProducts" @click="goToDetailPage(product)"
        v-bind:key="product.id"
        v-bind:product="product"/>
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