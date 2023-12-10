<script>
    export default {
        props: {
            product: Object
        }
    }
</script>

<template>
    <li class="productCard">
            <div> 
                <img :src="product.image" :alt="product.altimage"/>
            </div>
            <h3>{{ product.titel }}</h3>
            <div class="productCardDescription">
                <p class="productCardPrice">€ {{ product.price }}</p>
                <p>{{ product.description }}</p>
            </div> 
        </li>
</template>