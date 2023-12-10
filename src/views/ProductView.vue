<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'

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
            ]
        }
    },
    components: {
        ProductCardComponent
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
        <button class="selected">All</button>
        <button>Digital</button>
        <button>Painting</button>
        <button>Graphic Art</button>
    </div>
    <ul id="producttiles">
        <ProductCardComponent v-for="product in products"
        v-bind:key="product.id"
        v-bind:product="product"/>


        <!-- <li class="productCard">
            <div> 
                <img src="@/assets/kirby.png" alt="kirby with knife"/>
            </div>
            <h3>Kirby with knife</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€50</p>
                <p>Cute but deadly!</p>
            </div>
            
        </li>
        <li class="productCard">
        <div>
            <img src="@/assets/coffeeslayer.png" alt="Coffee slayer"/>
        </div>
            <h3>Coffee Slayer</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€50</p>
                <p>Defeat the morning!</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="@/assets/mimic.png" alt="Mimic"/>
            </div>
            <h3>Hungry Mimic</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€20</p>
                <p>Not the treasure you want!</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="@/assets/skelecat.png" alt="Skeleton cat"/>
            </div>
            <h3>Skelecat</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€25</p>
                <p>Spooky purssss...</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="@/assets/vissen.png" alt="Fish with pepper"/>
            </div>
            <h3>Spicy Fishes</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€100</p>
                <p>Smells fishy</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="@/assets/shrunkenhead.png" alt="Shrunkenhead in jar"/>
            </div>
            <h3>Shrunkenhead</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€50</p>
                <p>He looks thirsty</p>
            </div>
        </li> -->
        
    </ul>
    <div class="pagination">
        <button>&lt;</button>
        <ul>
            <li><button class="selected">1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
        </ul>
        <button>></button>
    </div>
</main>
</template>
<style lang="">
    
</style>