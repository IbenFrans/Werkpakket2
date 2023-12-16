<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import PopularProductsComponent from '../components/PopularProductsComponent.vue';

export default {
    data(){
        return{
            products: [
            {
                    id: 1,
                    titel: "Kirby with knife",
                    description: "Cute but deadly",
                    longDescription: "This absolute gorgeous round pink blob has some murderous tendancies.<br>He may be cute but he'll cut you up like fish.<br>He came to kill people and chew bubblegum and he's all out of bubble gum.<br><br>This piece was made in Illustrator",
                    image: "src/assets/kirby.png",
                    altImage: "Art kirby with knife",
                    price: 50,
                    btw: 5,
                    stock: 70,
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
                    stock: 90,
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
                    stock: 80,
                    tags: [
                        "treasure",
                        "deadly",
                        "digital"
                    ]
                },
                {
                    id: 4,
                    titel: "Skelecat",
                    description: "Spooky purssss...",
                    longDescription: "",
                    image: "src/assets/skelecat.png",
                    altImage: "Art Skelecat",
                    price: 25,
                    btw: 5,
                    stock: 50,
                    tags: [
                        "cute",
                        "cat",
                        "digital"
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
                    stock: 160,
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
                    titel: "",
                    description: "",
                    longDescription: "",
                    image: "",
                    altImage: "",
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
                    id: 8,
                    titel: "",
                    description: "",
                    longDescription: "",
                    image: "",
                    altImage: "",
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
                    id: 9,
                    titel: "",
                    description: "",
                    longDescription: "",
                    image: "",
                    altImage: "",
                    price: 50,
                    btw: 5,
                    stock: 50,
                    tags: [
                        "cute",
                        "deadly",
                        "digital"
                    ]
                },
            ],
        }
    },
    components: {
        PopularProductsComponent
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
            <PopularProductsComponent v-for="product in popularProducts"
            v-bind:key="product.id"
            v-bind:product="product"/>
        </ul>
        </div>
    </main>
</template>

<style lang="">
    
</style>