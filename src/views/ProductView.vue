<script>
export default {
    
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
        <li class="productCard">
            <div> 
                <img src="./assets/kirby.png" alt="kirby with knife"/>
            </div>
            <h3>Kirby with knife</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€50</p>
                <p>Cute but deadly!</p>
            </div>
            
        </li>
        <li class="productCard">
        <div>
            <img src="./assets/coffeeslayer.png" alt="Coffee slayer"/>
        </div>
            <h3>Coffee Slayer</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€50</p>
                <p>Defeat the morning!</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="./assets/mimic.png" alt="Mimic"/>
            </div>
            <h3>Hungry Mimic</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€20</p>
                <p>Not the treasure you want!</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="./assets/skelecat.png" alt="Skeleton cat"/>
            </div>
            <h3>Skelecat</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€25</p>
                <p>Spooky purssss...</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="./assets/vissen.png" alt="Fish with pepper"/>
            </div>
            <h3>Spicy Fishes</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€100</p>
                <p>Smells fishy</p>
            </div>
        </li>
        <li class="productCard">
            <div>
                <img src="./assets/shrunkenhead.png" alt="Shrunkenhead in jar"/>
            </div>
            <h3>Shrunkenhead</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€50</p>
                <p>He looks thirsty</p>
            </div>
        </li>
        
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