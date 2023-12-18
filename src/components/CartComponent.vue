<script>
export default {
    props: [
        'item'
    ]
}
</script>
<template lang="">
    <div class="cartComponent">
        <div class="imgDiv"> 
            <img :src="item.image" :alt="item.altimage"/>
        </div>
        <div class="itemDescription">
            <h3>{{ item.titel }}</h3>
            <p>{{ item.description }}</p>
            <p>x {{ item.amount }}</p>
            <div class="itemEdit">
            <div class="itemEditAmount">
                <input type="number" id="amount" name="quantity" min="1" max="5" :value="item.amount">
                <button class="amountConfirm">OK</button>
            </div>
            <button class="itemRemove">Remove</button>
        </div>
        </div>
        <div>

        </div>
    </div>
</template>

<style lang="">
    
</style>